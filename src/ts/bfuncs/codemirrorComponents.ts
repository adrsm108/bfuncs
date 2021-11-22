import {EditorState, StateEffect, StateField} from "@codemirror/state";
import {Decoration, DecorationSet, drawSelection, EditorView} from "@codemirror/view";
import {RangeSetBuilder} from "@codemirror/rangeset";
import {bracketMatching} from "@codemirror/matchbrackets";
import {classHighlightStyle, HighlightStyle, styleTags, tags as t} from "@codemirror/highlight";
import {LanguageSupport, LezerLanguage, syntaxTree} from "@codemirror/language";
// @ts-ignore
import {parser} from "./bexprParser.js";

type PTree = string | PTree[];

type ParseData = {
  hVar: string | null;
  hVarMarks: DecorationSet;
  parse: PTree;
  vars: string[];
  errors: ParseError[] | null;
  errMarks: DecorationSet;
};

type ParseError = {from: number; to: number; text: string};

type ParseOutput = {
  text: string;
  vars: string[];
  parse: PTree;
  errors: ParseError[] | null;
};

const varMark = Decoration.mark({class: "cm-markedVar"});
const errMark = Decoration.mark({class: "cm-parseError"});
const zeroWidthErrMark = Decoration.mark({class: "cm-zeroWidthParseError"});

function getParseData(state: EditorState, hVar: string | null): ParseData {
  // const hVarRanges = hVar ? new RangeSetBuilder<Decoration>() : null;
  const hVarRanges = new RangeSetBuilder<Decoration>();
  const errRanges = new RangeSetBuilder<Decoration>();
  const vars = new Set<string>();
  const stack: PTree = [];
  const errors: ParseError[] = [];
  syntaxTree(state).iterate({
    enter: (nt, from, to) => {
      if (nt.isError) {
        const text = state.sliceDoc(from, to);
        if (from === to) {
          // errRanges.add(Math.max(0,from-1), to, zeroWidthErrMark)
          errRanges.add(from, to + 1, zeroWidthErrMark);
        } else {
          errRanges.add(from, to, errMark);
        }
        errors.push({from, to, text});
        stack.push(["ERROR"]);
      } else if (nt.is("str")) {
        if (nt.name === "var") {
          const text = state.sliceDoc(from, to);
          stack.push(["var", text]);
          vars.add(text);
          if (text === hVar) {
            hVarRanges.add(from, to, varMark);
          }
        } else {
          stack.push([nt.name]);
        }
      } else {
        return false;
      }
    },
    leave: () => {
      const secondLast = stack[stack.length - 2] as PTree[];
      if (secondLast) {
        secondLast.push(stack.pop()!);
      }
    },
  });
  return {
    hVar,
    hVarMarks: hVarRanges.finish(),
    parse: stack.pop()!,
    vars: [...vars].sort(),
    errors: errors.length > 0 ? errors : null,
    errMarks: errRanges.finish(),
  };
}

const hstyle = HighlightStyle.define([
  {tag: t.compareOperator, class: "cmt-rel-op"},
  {tag: t.operatorKeyword, class: "cmt-operator-keyword cmt-operator"},
  {tag: t.logicOperator, class: "cmt-log-op"},
  {tag: t.special(t.logicOperator), class: "cmt-negated"},
]);

const bexprLanguage = LezerLanguage.define({
  parser: parser.configure({
    props: [
      styleTags({
        lit: t.bool,
        litKey: [t.keyword, t.bool],
        log: t.logicOperator,
        logKey: [t.operatorKeyword, t.logicOperator],
        rel: t.compareOperator,
        relKey: [t.operatorKeyword, t.compareOperator],
        not: t.special(t.logicOperator),
        notKey: [t.operatorKeyword, t.special(t.logicOperator)],
        var: t.variableName,
        neg: t.special(t.logicOperator),
      }),
    ],
  }),
});

function bexpr() {
  return new LanguageSupport(bexprLanguage);
}

export function createEditor(
  onParse: (newParse: ParseOutput) => any,
  doc?: string
): [(showErrors: boolean, markedVar: string | null) => void, EditorView] {
  const parse = (state: EditorState, hVar: string | null) => {
    const pd = getParseData(state, hVar);
    onParse({
      parse: pd.parse,
      vars: pd.vars,
      errors: pd.errors,
      text: state.doc.toString(),
    });
    return pd;
  };

  const markVariable = StateEffect.define<string | null>();
  const markErrors = StateEffect.define<boolean>();

  const parseField = StateField.define<ParseData>({
    create: (state) => parse(state, null),
    update: (prevData, tr) => {
      for (const e of tr.effects) {
        if (e.is(markVariable)) {
          return parse(tr.state, e.value);
        }
      }
      if (tr.docChanged) {
        return parse(tr.state, prevData.hVar);
      }
      return prevData;
    },
  });

  const showErrors = StateField.define<boolean>({
    create: () => false,
    update: (value, tr) => {
      for (const e of tr.effects) if (e.is(markErrors)) return e.value;
      return value;
    },
  });

  const view = new EditorView({
    state: EditorState.create({
      extensions: [
        bexpr(),
        parseField,
        showErrors,
        EditorView.lineWrapping,
        EditorView.decorations.compute([parseField, showErrors], (state: EditorState) =>
          state.field(showErrors) ? state.field(parseField).errMarks : Decoration.none
        ),
        EditorView.decorations.from(parseField, (data) => data.hVarMarks),
        drawSelection(),
        hstyle.extension,
        classHighlightStyle.extension,
        bracketMatching(),
      ],
      doc,
    }),
  });

  return [
    (showErrors: boolean, markedVar: string | null) => {
      view.dispatch({effects: [markErrors.of(showErrors), markVariable.of(markedVar)]});
    },
    view,
  ];
}
