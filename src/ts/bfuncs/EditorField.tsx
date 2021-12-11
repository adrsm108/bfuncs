import React, { Component } from "react";
import {
  EditorState,
  Facet,
  StateEffect,
  StateEffectType,
  StateField,
  Transaction,
} from "@codemirror/state";
import { Decoration, DecorationSet, EditorView, placeholder } from "@codemirror/view";
import { RangeSet, RangeSetBuilder } from "@codemirror/rangeset";
import { bracketMatching } from "@codemirror/matchbrackets";
import {
  classHighlightStyle,
  HighlightStyle,
  styleTags,
  Tag,
  tags as t,
} from "@codemirror/highlight";
import { LanguageSupport, LezerLanguage, syntaxTree } from "@codemirror/language";
// @ts-ignore
import { parser as bexprParser } from "./bexprParser.js";
// @ts-ignore
import { parser as termParser } from "./termsParser.js";

import clsx from "clsx";

// @ts-ignore
// noinspection CommaExpressionJS
const echo = (label, x) => {
  console.log(label, x);
  return x;
};

// @ts-ignore
function logParseTree(state) {
  const stack: any = [];
  syntaxTree(state).iterate({
    enter(nt, from, to) {
      stack.push([nt.name, state.sliceDoc(from, to)]);
    },
    leave() {
      if (stack.length > 1) {
        stack[stack.length - 2].push(stack.pop());
      }
    },
  });
}

type PTree = string | boolean | PTree[];
type term = number | bigint;
type EditorFieldState = {
  view: EditorView;
  hasErrors: boolean;
};
type EditorFieldProps = typeof EditorField.defaultProps & {
  placeholder?: string | HTMLElement;
  onParse<T extends Partial<ParseData>>(newParse: T): any;
};
type ParseData = {
  errors: boolean;
  errMarks: DecorationSet;
};

interface ExprParseData extends ParseData {
  parse: PTree;
  vars: string[];
}

interface TermsParseData extends ParseData {
  terms: term[];
  extra: term | null;
  duplicates: boolean;
  dupMarks: DecorationSet;
}

const varMark = Decoration.mark({ class: "cm-markedVar" });
const errorMark = Decoration.mark({ class: "cm-parseError" });
const zeroWidthErrorLeftMark = Decoration.mark({ class: "cm-zeroWidthErrorLeft" });
const zeroWidthErrorRightMark = Decoration.mark({ class: "cm-zeroWidthErrorRight" });
const duplicateTermMark = Decoration.mark({ class: "cm-duplicateTerm" });

const hexInt = Tag.define(t.integer);
const octInt = Tag.define(t.integer);
const binInt = Tag.define(t.integer);

function bexpr() {
  return new LanguageSupport(
    LezerLanguage.define({
      parser: bexprParser.configure({
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
    })
  );
}

function terms() {
  return new LanguageSupport(
    LezerLanguage.define({
      parser: termParser.configure({
        props: [
          styleTags({
            Dec: t.integer,
            Bin: binInt,
            Oct: octInt,
            Hex: hexInt,
            Sep: t.separator,
          }),
        ],
      }),
    })
  );
}

const style = HighlightStyle.define([
  { tag: t.compareOperator, class: "cmt-rel-op" },
  { tag: t.operatorKeyword, class: "cmt-operator-keyword cmt-operator" },
  { tag: t.logicOperator, class: "cmt-log-op" },
  { tag: t.special(t.logicOperator), class: "cmt-negated" },
  { tag: t.integer, class: "cmt-integer" },
  { tag: hexInt, class: "cmt-hex" },
  { tag: octInt, class: "cmt-oct" },
  { tag: binInt, class: "cmt-bin" },
  { tag: t.separator, class: "cmt-sep" },
]);

function updateByEffect<T>(effectType: StateEffectType<T>): (value: T, tr: Transaction) => T {
  return (value, tr) => {
    for (const e of tr.effects) if (e.is(effectType)) return e.value;
    return value;
  };
}

const changeMarkedVariable = StateEffect.define<string | null>();
const changeShowErrors = StateEffect.define<boolean>();
const changeDuplicatedTerms = StateEffect.define<term[]>();
const changeIgnoreAtCursor = StateEffect.define<boolean>();
const dontIgnoreAtCursor = changeIgnoreAtCursor.of(false);

const showErrorsField = StateField.define<boolean>({
  create: () => false,
  update: updateByEffect(changeShowErrors),
});
const markedVariableField = StateField.define<string | null>({
  create: () => null,
  update: updateByEffect(changeMarkedVariable),
});
const dupedTermsField = StateField.define<term[]>({
  create: () => [],
  update: updateByEffect(changeDuplicatedTerms),
});
const ignoreAtCursorField = StateField.define<boolean>({
  create: () => true,
  update: (value, tr) =>
    tr.effects.find((e) => e.is(changeIgnoreAtCursor))?.value ??
    (tr.docChanged ? true : tr.selection != null ? false : value),
});
const parseFacet = Facet.define<ParseData, ParseData>({
  combine: (value) => (value.length ? value[0] : { errors: false, errMarks: Decoration.none }),
});

function parseTerm(text: string): term {
  const [textNoSep, prefix, digits] =
    text.replaceAll("_", "").match(/^(0[obx])?([\da-fA-F]+)$/) ?? [];
  if (textNoSep == null) {
    throw new Error("Could not parse term from input " + text);
  }
  const val = parseInt(
    digits,
    prefix === "0b" ? 0b10 : prefix === "0o" ? 0o10 : prefix === "0x" ? 0x10 : 10
  );
  return val > Number.MAX_SAFE_INTEGER ? BigInt(textNoSep) : val;
}

function getExprParseData(state: EditorState): ExprParseData {
  // const hVarRanges = hVar ? new RangeSetBuilder<Decoration>() : null;
  const errRanges = new RangeSetBuilder<Decoration>();
  const vars = new Set<string>();
  const stack: PTree = [];
  syntaxTree(state).iterate({
    enter: (nt, from, to) => {
      if (nt.isError) {
        if (from === to) {
          if (from) {
            errRanges.add(from - 1, to, zeroWidthErrorRightMark);
          } else {
            errRanges.add(from, to + 1, zeroWidthErrorLeftMark);
          }
        } else {
          errRanges.add(from, to, errorMark);
        }
        stack.push(Object.assign([], { operation: "ERROR" }));
      } else if (nt.is("str")) {
        stack.push(Object.assign([], { operation: nt.name }));
      } else if (nt.is("atom")) {
        const stackTop = stack[stack.length - 1] as PTree[];
        switch (nt.name) {
          case "TRUE":
            stackTop.push(true);
            break;
          case "FALSE":
            stackTop.push(false);
            break;
          case "var":
            const text = state.sliceDoc(from, to);
            stackTop.push(text);
            vars.add(text);
            break;
          default:
            console.warn("Unknown atom " + nt.name);
            break;
        }
        return false;
      } else {
        return false;
      }
    },
    leave: (nt) => {
      if (nt.is("atom")) return;
      const secondLast = stack[stack.length - 2] as PTree[];
      if (secondLast) {
        secondLast.push(stack.pop()!);
      }
    },
  });
  const errMarks = errRanges.finish();
  return {
    parse: stack.pop()!,
    vars: [...vars], //.sort(),
    errors: Boolean(errMarks.size),
    errMarks,
  };
}

function getVariableMarks(state: EditorState) {
  const mVar = state.field(markedVariableField);
  const ranges = new RangeSetBuilder<Decoration>();
  syntaxTree(state).iterate({
    enter: (nt, from, to) => {
      if (nt.name === "var" && state.sliceDoc(from, to) === mVar) ranges.add(from, to, varMark);
      if (!(nt.isError || nt.is("str"))) return false;
    },
  });
  return ranges.finish();
}

function getTermsParseData(state: EditorState, ignoreAtCursor: boolean = true): TermsParseData {
  const cursorPos = ignoreAtCursor && state.selection.main.empty ? state.selection.main.from : null;
  const dups = new Set<term>(state.field(dupedTermsField));
  const errRanges = new RangeSetBuilder<Decoration>();
  const termPositions = new Map<term, [number, number][]>();
  const isUnderCursor: (from: number, to: number) => boolean =
    cursorPos != null ? (from, to) => from <= cursorPos && cursorPos <= to : () => false;
  let termUnderCursor = null;
  syntaxTree(state).iterate({
    enter: (nt, from, to) => {
      if (nt.isError || nt.name === "None") {
        if (!isUnderCursor(from, to)) {
          if (from === to) {
            if (from) errRanges.add(from - 1, to, zeroWidthErrorRightMark);
            else errRanges.add(from, to + 1, zeroWidthErrorLeftMark);
          } else {
            errRanges.add(from, to, errorMark);
          }
        }
      } else if (nt.is("term")) {
        const text = state.sliceDoc(from, to);
        const val = parseTerm(text);
        const tp = termPositions.get(val);
        if (tp != null) {
          if (!isUnderCursor(from, to)) {
            tp.push([from, to]);
            dups.add(val);
          }
        } else {
          if (isUnderCursor(from, to)) {
            termUnderCursor = val;
            termPositions.set(val, []);
          } else {
            termPositions.set(val, [[from, to]]);
          }
        }
      }
    },
  });
  const errMarks = errRanges.finish();
  return {
    terms: [...termPositions.keys()],
    extra:
      termUnderCursor != null && termPositions.get(termUnderCursor)!.length === 0
        ? termUnderCursor
        : null,
    errors: Boolean(errMarks.size),
    duplicates: Boolean(dups.size),
    dupMarks: RangeSet.of(
      [...dups].flatMap(
        (val) => termPositions.get(val)?.map((r) => duplicateTermMark.range(...r)) ?? []
      ),
      true
    ),
    errMarks,
  };
}

function correctSelection() {
  const active = document.activeElement;
  const sel = window.getSelection();
  if (sel?.type === "Range") {
    if (active instanceof HTMLElement) {
      active.blur();
    }
    sel.collapseToStart();
    if (active instanceof HTMLElement) {
      active.focus();
    } else if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  }
}

abstract class EditorField<P extends EditorFieldProps> extends Component<P, EditorFieldState> {
  static defaultProps = {
    showErrors: false,
    initialDoc: "",
    className: "",
    allowEmpty: false,
  };

  abstract createEditor(props: P): EditorView;

  divProps?: React.ComponentProps<any>;
  divRef;
  initErrors;

  protected constructor(props: P) {
    super(props);
    this.divRef = React.createRef<HTMLDivElement>();
    this.initErrors = false;
    const view = this.createEditor(props);
    this.state = { view, hasErrors: this.initErrors };
  }

  finishParse = <D extends ParseData>(data: D, text: string) => {
    const onParseArg =
      text || this.props.allowEmpty ? Object.assign(data, { text: text }) : { errors: true, text };
    this.props.onParse(onParseArg);

    if (this.state == null) {
      this.initErrors = onParseArg.errors;
    } else if (this.state.hasErrors !== onParseArg.errors) {
      this.setState({ hasErrors: onParseArg.errors });
    }

    return data;
  };

  componentDidMount() {
    this.divRef.current?.append(this.state.view.dom);
  }

  componentWillUnmount() {
    this.state.view.destroy();
  }

  render() {
    return (
      <div
        {...this.divProps}
        className={clsx(
          "EditorField",
          this.constructor.name,
          this.props.showErrors && "show-errors",
          this.state.hasErrors && "has-errors",
          this.props.className
        )}
        ref={this.divRef}
      />
    );
  }
}

interface ExpressionFieldProps extends EditorFieldProps {
  markedVariable: string | null;
}

export class ExpressionField extends EditorField<ExpressionFieldProps> {
  constructor(props: ExpressionFieldProps) {
    super(props);
  }

  parse(state: EditorState) {
    return this.finishParse(getExprParseData(state), state.doc.toString());
  }

  createEditor(props: ExpressionFieldProps) {
    const { initialDoc: doc, showErrors, markedVariable } = props;
    return new EditorView({
      state: EditorState.create({
        extensions: [
          bexpr(),
          bracketMatching(),
          style.extension,
          classHighlightStyle.extension,
          showErrorsField.init(() => showErrors),
          markedVariableField.init(() => markedVariable),
          parseFacet.compute(["doc"], (state) => this.parse(state)),
          EditorView.decorations.compute(["doc", markedVariableField], getVariableMarks),
          EditorView.decorations.compute([showErrorsField, parseFacet], (state: EditorState) =>
            state.field(showErrorsField) ? state.facet(parseFacet).errMarks : Decoration.none
          ),
          EditorView.lineWrapping,
        ],
        doc,
      }),
    });
  }

  componentDidUpdate(prevProps: ExpressionFieldProps, prevState: EditorFieldState, snapshot?: any) {
    const updateEffects = [];
    const { markedVariable, showErrors } = this.props;
    if (markedVariable !== prevProps.markedVariable) {
      updateEffects.push(changeMarkedVariable.of(markedVariable));
    }
    if (showErrors !== prevProps.showErrors) {
      updateEffects.push(changeShowErrors.of(showErrors));
    }
    if (updateEffects.length) {
      updateEffects.push(dontIgnoreAtCursor);
      correctSelection();
      this.state.view.dispatch({ effects: updateEffects });
    }
  }
}

interface TermsFieldProps extends EditorFieldProps {
  duplicatedTerms: term[];
}

export class TermsField extends EditorField<TermsFieldProps> {
  divProps = {
    onBlur: () => {
      this.state.view.dispatch({ effects: dontIgnoreAtCursor });
    },
  };

  constructor(props: TermsFieldProps) {
    super(props);
  }

  parse(state: EditorState, ignoreAtCursor: boolean = true) {
    return this.finishParse(
      getTermsParseData(state, Boolean(this.state?.view?.hasFocus && ignoreAtCursor)),
      state.doc.toString()
    );
  }

  createEditor(props: TermsFieldProps) {
    const { initialDoc: doc, showErrors, duplicatedTerms, placeholder: placeholderVal } = props;
    return new EditorView({
      state: EditorState.create({
        extensions: [
          terms(),
          placeholderVal == null ? [] : placeholder(placeholderVal),
          style.extension,
          classHighlightStyle.extension,
          dupedTermsField.init(() => duplicatedTerms),
          showErrorsField.init(() => showErrors),
          ignoreAtCursorField,
          parseFacet.compute(["doc", ignoreAtCursorField, dupedTermsField], (state) =>
            this.parse(state, state.field(ignoreAtCursorField))
          ),
          EditorView.decorations.compute([showErrorsField, parseFacet], (state: EditorState) =>
            state.field(showErrorsField) ? state.facet(parseFacet).errMarks : Decoration.none
          ),
          EditorView.decorations.compute(
            [parseFacet],
            (state) => state.facet<TermsParseData>(parseFacet)?.dupMarks ?? Decoration.none
          ),
          EditorView.lineWrapping,
        ],
        doc,
      }),
    });
  }

  componentDidUpdate(prevProps: TermsFieldProps, prevState: EditorFieldState, snapshot?: any) {
    const updateEffects = [];
    const { duplicatedTerms, showErrors } = this.props;
    if (duplicatedTerms !== prevProps.duplicatedTerms) {
      updateEffects.push(changeDuplicatedTerms.of(duplicatedTerms));
    }
    if (showErrors !== prevProps.showErrors) {
      updateEffects.push(changeShowErrors.of(showErrors));
    }
    if (updateEffects.length) {
      correctSelection();
      this.state.view.dispatch({ effects: updateEffects });
    }
  }
}
