import React, {Component} from "react";
import {BaseType, EnterElement, Selection, Transition, ScaleLinear} from "d3";
import * as d3 from "d3";
import katex, {KatexOptions} from "katex";
import {Grid, Switch, FormControlLabel} from "@material-ui/core";

type Scale = ScaleLinear<number, number>;

type AnyTransition = Transition<BaseType, any, any, any>;

interface Cell {
  term: number;
  dot: boolean;
  covered: boolean;
}

interface Row {
  index: number;
  prime: (boolean | null)[];
  essential: boolean;
  allCovered: boolean;
  cols: Cell[];

  onClick(event: any, d: unknown): void;

  onKeyDown(event: any, d: unknown): void;

  onKeyUp(event: any, d: unknown): void;
}

interface Term {
  term: number;
  index: number;
  covered: boolean;
  coveredBy: number[];

  onClick(event: any, d: unknown): void;

  onKeyDown(event: any, d: unknown): void;

  onKeyUp(event: any, d: unknown): void;
}

interface DataSet {
  allPrimesEssential: boolean;
  allTermsCovered: boolean;
  noPrimesEssential: boolean;
  rows: Row[];
  terms: Term[];
}

type State = {
  hide: boolean;
  xScale: Scale;
  yScale: Scale;
  height: number;
  contentHeight: number;
  width: number;
  cellWidth: number;
  cellHeight: number;
  translateUpHalfRow: string;
  translateLeftHalfCell: string;
};

type Props = typeof CoverageTable.defaultProps & {
  selectedTerm?: number;
  selectedPrime?: number;
  className?: string;
  primeType: string;
  termType: string;
  data: DataSet;
  onClick?: React.MouseEventHandler<HTMLElement>;
  katexOptions?: KatexOptions;
};

type ConstantDatum = {
  height: number;
  minWidth: number;
  contentHeight: number;
};

type BoxShadowSpec = [dx: number, dy: number, blur: number, spread: number, color: string];

function defineShadow(defs: Selection<SVGDefsElement, any, any, any>, id: string, specs: BoxShadowSpec[]) {
  const filter = defs.append("filter").attr("id", id);

  filter.append("feComponentTransfer").attr("result", 0).append("feFuncA").attr("type", "linear").attr("slope", 2000);

  const toMerge = specs.map(([dx, dy, blur, spread, color], i) => {
    let chain = 0;
    const resultName = `s${i}`;
    if (spread) {
      filter
        .append("feMorphology")
        .attr("in", chain)
        .attr("operator", spread > 0 ? "dilate" : "erode")
        .attr("radius", Math.abs(spread))
        .attr("result", ++chain);
    }
    filter
      .append("feOffset")
      .attr("in", chain)
      .call((offset) => {
        if (dx) offset.attr("dx", dx);
        if (dy) offset.attr("dy", dy);
      })
      .attr("result", ++chain);
    if (blur)
      filter
        .append("feGaussianBlur")
        .attr("in", chain)
        .attr("stdDeviation", blur)
        .attr("result", ++chain);
    filter
      .append("feComposite")
      .attr("in", chain)
      .attr("in2", 0)
      .attr("operator", "out")
      .attr("result", ++chain);
    filter.append("feFlood").attr("flood-color", color);
    filter.append("feComposite").attr("operator", "in").attr("in2", chain).attr("result", resultName);
    return resultName;
  });
  filter
    .append("feMerge")
    .call((merge) => {
      for (const x of toMerge) {
        merge.append("feMergeNode").attr("in", x);
      }
    })
    .append("feMergeNode")
    .attr("in", "SourceGraphic");
}

function tableScale(n: number, [a, b]: number[]): [number, Scale] {
  return [Math.abs((b - a) / n), d3.scaleLinear([-0.5, n - 0.5], [a, b])];
}

function compressedTableScaleBy<T>(data: T[], pred: (x: T) => boolean, normalRange: [number, number]): [number, Scale] {
  const domain = [-1];
  const range = [-1];
  const len = data.length;
  let count = 0;
  let i = 0;
  let acc = 0;
  let start = null;
  while (i < len && pred(data[i])) i++;
  if (i - 1 < len) {
    domain.push(i - 1, i);
    range.push(-1, 0);
    count++;
  }
  for (i = i + 1; i < len; i++) {
    const curr = pred(data[i]);
    if (curr && start === null) {
      start = i;
    } else if (!curr) {
      if (start !== null) {
        domain.push(start);
        range.push(++acc);
        if (start < i - 1) {
          domain.push(i - 1);
          range.push(acc);
        }
        start = null;
      } else {
        acc++;
      }
      domain.push(i);
      range.push(++acc);
      count++;
    }
  }
  if (start !== null) {
    domain.push(start);
    range.push(acc + 1);
  }
  domain.push(i);
  range.push(acc + 1);

  return [
    Math.abs((normalRange[1] - normalRange[0]) / count),
    d3.scaleLinear(domain, range.map(d3.scaleLinear([-1, acc + 1], normalRange))),
  ];
}

function calcConstants(props: Props): ConstantDatum[] {
  const {
    rowHeight,
    minColumnWidth,
    margin,
    data: {rows, terms},
  } = props;
  const marginX = margin.left + margin.right;
  const marginY = margin.top + margin.bottom;
  let rowCount = rows.length;
  let colCount = terms.length;

  const height = marginY + rowHeight * rowCount;
  const ret = [
    {
      height,
      contentHeight: marginY + rowHeight * rowCount,
      minWidth: marginX + minColumnWidth * colCount,
    },
  ];
  for (const row of rows) if (row.essential) rowCount--;
  for (const term of terms) if (term.covered) colCount--;
  ret.push({
    height,
    contentHeight: marginY + rowHeight * rowCount,
    minWidth: marginX + minColumnWidth * colCount,
  });
  return ret;
}

class CoverageTable extends Component<Props, State> {
  static defaultProps = {
    margin: {
      top: 32,
      right: 0,
      bottom: 0,
      left: 40,
    },
    rowHeight: 32,
    minColumnWidth: 32,
    dotRadius: 8,
    formatRowHeader: (i: number) => `\\imp_{${i + 1}}`,
    formatColumnHeader: (i: number) => `\\term_{${i}}`,
  };

  divRef;
  recomputeScaleObserver;
  constants;
  divStyle: React.CSSProperties;
  states?: State[];
  svg?: Selection<SVGSVGElement, any, any, any>;
  allEssentialMessage?: Selection<HTMLDivElement, any, any, any>;
  allCoveredMessage?: Selection<HTMLDivElement, any, any, any>;
  cutout?: {
    cutoutGroup: Selection<SVGGElement, any, any, any>;
    cutout: Selection<SVGRectElement, any, any, any>;
    lastSelectedTerm: number | null;
  };
  transitions?: {tx: AnyTransition; ty: AnyTransition};

  constructor(props: Props) {
    super(props);
    this.constants = calcConstants(props);
    this.divRef = React.createRef<HTMLDivElement>();
    this.recomputeScaleObserver = new ResizeObserver(this.computeScales);
    const {data, margin, minColumnWidth} = props;
    this.divStyle = {
      flexBasis: data.terms.length * minColumnWidth + margin.left + margin.right,
      flexGrow: 1,
      flexShrink: 1,
      overflowX: "auto",
    };
    // @ts-ignore
    this.state = {
      hide: false,
    };
  }

  initialize = () => {
    const {
      margin,
      data: {allPrimesEssential, allTermsCovered},
      primeType,
      termType,
      rowHeight,
    } = this.props;
    const divNode = this.divRef.current!;
    this.svg = d3
      .select(divNode)
      .append("svg")
      .classed("root-svg", true)
      .attr("preserveAspectRatio", "none")
      .call((svg: Selection<any, any, any, any>) => {
        svg.append("defs").call((defs) => {
          defs
            .call(defineShadow, "shadow-1", [
              [0, 2, 1, -1, "rgba(0,0,0,0.2)"],
              [0, 1, 1, 0, "rgba(0,0,0,0.14)"],
              [0, 1, 3, 0, "rgba(0,0,0,0.12)"],
            ])
            .call(defineShadow, "shadow-2", [
              [0, 3, 1, -2, "rgba(0,0,0,0.2)"],
              [0, 2, 2, 0, "rgba(0,0,0,0.14)"],
              [0, 1, 5, 0, "rgba(0,0,0,0.12)"],
            ]);
          defs
            .append("mask")
            .attr("id", "selected-col-mask")
            .attr("x", 0)
            .attr("y", 0)
            .call((mask) => {
              mask
                .append("rect")
                .attr("fill", "white")
                .attr("x", 0)
                .attr("y", 0)
                .attr("width", "100%")
                .attr("height", "100%");
              const cutoutGroup = mask.append("g").classed("cutout-group", true);
              this.cutout = {
                cutoutGroup,
                cutout: cutoutGroup
                  .append("rect")
                  .classed("cutout", true)
                  .attr("x", 0)
                  .attr("y", 0)
                  .attr("height", "100%")
                  .attr("filter", "url(#shadow-1)")
                  .attr("fill", "black"),
                lastSelectedTerm: null,
              };
            });
        });
        const content = svg.append("g").classed("content", true);
        content
          .append("g")
          .classed("axes", true)
          .call((axes) => {
            axes
              .append("g")
              .classed("axis", true)
              .classed("x", true)
              .attr("transform", `translate(0, ${margin.top})`)
              .append("line")
              .classed("domain", true)
              .attr("x1", 0)
              .attr("x2", "100%")
              .attr("y1", 0)
              .attr("y2", 0);
            axes
              .append("g")
              .classed("axis", true)
              .classed("y", true)
              .attr("transform", `translate(${margin.left}, 0)`)
              .append("line")
              .classed("domain", true)
              .attr("x1", 0)
              .attr("x2", 0)
              .attr("y1", 0);
          });
        content.append("g").classed("cols", true);
        content.append("g").classed("rows", true);
      });

    if (allPrimesEssential) {
      this.allEssentialMessage = d3
        .select(divNode)
        .append("div")
        .classed("message", true)
        .classed("all-essential", true)
        .classed("visible", false)
        .text(`All prime ${primeType}s are essential.`);
    } else if (allTermsCovered) {
      this.allCoveredMessage = d3
        .select(divNode)
        .append("div")
        .classed("message", true)
        .classed("all-covered", true)
        .classed("visible", false)
        .style("top", 0)
        .style("left", `${margin.left}px`)
        .style("right", `${margin.right}px`)
        .style("height", `${rowHeight}px`)
        .text(`All ${termType}s covered by essential ${primeType}s.`);
    }
    this.recomputeScaleObserver.observe(divNode);
  };

  computeStateFromConstant = ({height, minWidth, contentHeight}: ConstantDatum, i: number) => {
    const divWidth = this.divRef.current?.getBoundingClientRect().width ?? 0;
    // if (divWidth === undefined) return;
    const hide = !!i;
    const {
      data: {terms, rows, allTermsCovered, allPrimesEssential},
      margin,
    } = this.props;
    const width = Math.max(minWidth, divWidth);
    const [cellWidth, xScale] =
      hide && !allTermsCovered
        ? compressedTableScaleBy(terms, (t) => t.covered, [margin.left, width - margin.right])
        : tableScale(terms.length, [margin.left, width - margin.right]);
    const [cellHeight, yScale] =
      hide && !allPrimesEssential
        ? compressedTableScaleBy(rows, (r) => r.essential, [margin.top, contentHeight - margin.bottom])
        : tableScale(rows.length, [margin.top, height - margin.bottom]);
    return {
      hide,
      xScale,
      yScale,
      height,
      contentHeight,
      width,
      cellWidth,
      cellHeight,
      translateUpHalfRow: `translate(0, ${-cellHeight / 2})`,
      translateLeftHalfCell: `translate(${-cellWidth / 2},0)`,
    };
  };

  computeScales = () => {
    this.states = this.constants.map(this.computeStateFromConstant);
    this.setState((state: State) => this.states![+state.hide]);
  };

  handleHide = (hide: boolean) => {
    this.setState(this.states![+hide]);
  };

  enterRow = (enter: Selection<EnterElement, Row, BaseType, any>) => {
    const {cellHeight, yScale, translateUpHalfRow} = this.state;
    const {margin, selectedPrime, formatRowHeader, katexOptions} = this.props;
    return enter.append("g").each(function ({essential, allCovered, onClick, onKeyDown, onKeyUp}, i) {
      const sel = d3
        .select(this)
        .classed("row", true)
        .classed("essential", essential)
        .classed("selected", i === selectedPrime)
        .attr("opacity", 1)
        .attr("transform", `translate(0, ${yScale(i)})`);
      sel
        .append("rect")
        .classed("row-rect", true)
        .attr("tabindex", 0)
        .attr("height", cellHeight)
        .attr("width", "100%")
        .attr("transform", translateUpHalfRow)
        .attr("mask", "url(#selected-col-mask)")
        .on("click", onClick)
        .on("keydown", onKeyDown)
        .on("keyup", onKeyUp);
      katex.render(
        formatRowHeader(i),
        sel
          .append("foreignObject")
          .classed("row-label-container", true)
          .attr("x", 0)
          .attr("y", -cellHeight / 2)
          .attr("width", margin.left)
          .attr("height", cellHeight)
          .append("xhtml:div")
          .classed("row-label", true)
          .style("width", "auto")
          .style("text-align", "center")
          .style("height", "100%")
          .node() as HTMLElement,
        katexOptions
      );
    });
  };

  updateRow = (update: Selection<SVGGElement, Row, BaseType, any>) => {
    const {hide, yScale, translateUpHalfRow} = this.state;
    const {ty} = this.transitions!;
    const {selectedPrime, selectedTerm} = this.props;
    const {allPrimesEssential} = this.props.data;

    return update.each(function ({essential}, i) {
      const sel = d3.select(this).classed("selected", i === selectedPrime);
      const tr = sel.transition(ty).attr("transform", `translate(0, ${yScale(i)})`);
      if (hide) {
        if (selectedTerm === null) {
          tr.select(".all-covered.message").transition().duration(300).attr("opacity", 1);
        } else {
          tr.select(".all-covered.message").attr("opacity", 0);
        }
        tr.select("rect.row-rect")
          .attr("opacity", essential ? 0 : 1)
          .attr("transform", essential && !allPrimesEssential ? "scale(1, 0)" : translateUpHalfRow)
          .attr("tabindex", essential ? "" : 0);
        tr.select(".row-label-container").attr("opacity", essential ? 0 : 1);
      } else {
        sel.select(".all-covered.message").attr("opacity", 0);
        tr.select("rect.row-rect").attr("opacity", 1).attr("tabindex", 0).attr("transform", translateUpHalfRow);
        tr.select(".row-label-container").attr("opacity", 1);
      }
    });
  };

  enterCell = (enter: Selection<EnterElement, Cell, SVGGElement, Row>) => {
    const {dotRadius} = this.props;
    const {xScale} = this.state;
    return enter.append("g").each(function ({dot, covered}, i) {
      const sel = d3
        .select(this)
        .classed("cell", true)
        .attr("transform", `translate(${xScale(i)}, 0)`)
        .attr("opacity", 1);
      if (dot) sel.append("circle").classed("dot", true).attr("r", dotRadius);
    });
  };

  updateCell = (update: Selection<SVGGElement, Cell, SVGGElement, Row>) => {
    const {hide, xScale} = this.state;
    const {tx} = this.transitions!;
    return update.each(function ({covered}, i) {
      d3.select(this)
        .transition(tx)
        .attr("transform", `translate(${xScale(i)}, 0)`)
        .attr("opacity", hide && covered ? 0 : 1)
        .select("circle.dot")
        .attr("transform", hide && covered ? "scale(0, 0)" : "");
    });
  };

  enterColumn = (enter: Selection<EnterElement, Term, BaseType, any>) => {
    const {cellWidth, xScale, contentHeight, translateLeftHalfCell} = this.state;
    const {margin, formatColumnHeader, katexOptions} = this.props;
    return enter.append("g").each(function ({term, covered, onClick, onKeyDown, onKeyUp}, i) {
      const sel = d3
        .select(this)
        .classed("column", true)
        .classed("covered", covered)
        .attr("transform", `translate(${xScale(i)}, 0)`);
      sel
        .append("rect")
        .classed("col-rect", true)
        .attr("tabindex", 0)
        .attr("height", contentHeight)
        .attr("width", cellWidth)
        .attr("transform", translateLeftHalfCell)
        .on("click", onClick)
        .on("keydown", onKeyDown)
        .on("keyup", onKeyUp);
      katex.render(
        formatColumnHeader(term),
        sel
          .append("foreignObject")
          .classed("column-label-container", true)
          .attr("x", 0)
          .attr("y", 0)
          .attr("width", cellWidth)
          .attr("height", margin.top)
          .attr("transform", translateLeftHalfCell)
          .append("xhtml:div")
          .classed("column-label", true)
          .style("width", "100%")
          .style("text-align", "center")
          .style("position", "absolute")
          .style("top", "50%")
          .style("transform", `translateY(-50%)`)
          .node() as HTMLElement,
        katexOptions
      );
    });
  };

  updateColumn = (update: Selection<SVGGElement, Term, BaseType, any>) => {
    const {hide, xScale, cellWidth, contentHeight, translateLeftHalfCell} = this.state;
    const {allTermsCovered, allPrimesEssential} = this.props.data;
    const {tx, ty} = this.transitions!;
    const {selectedTerm} = this.props;
    const thisCutoutRef = this.cutout!;
    const {cutout, cutoutGroup, lastSelectedTerm} = thisCutoutRef;

    return update.each(function ({term, covered}, i) {
      const sel = d3.select(this);
      const rect = sel.select("rect.col-rect");
      const op = hide && covered ? 0 : 1;

      sel
        .transition(tx)
        .attr("transform", `translate(${xScale(i)}, 0)`)
        .attr("opacity", op)
        .style("pointer-events", hide && covered ? "none" : "auto")
        .select(".column-label-container")
        .attr("opacity", op);

      if (hide && !allTermsCovered && covered) {
        rect.attr("tabindex", "").transition(tx).attr("transform", "scale(0, 1)");
      } else {
        rect.attr("tabindex", 0).transition(tx).attr("width", cellWidth).attr("transform", translateLeftHalfCell);
      }
      if (!allPrimesEssential) {
        rect.transition(ty).attr("height", contentHeight);
      }

      if (term === selectedTerm) {
        sel.classed("selected", true);
        cutoutGroup
          .attr("transform", sel.attr("transform"))
          .transition(tx)
          .attr("transform", `translate(${xScale(i)}, 0)`);
        if (hide && covered) {
          cutout.attr("transform", rect.attr("transform")).transition(tx).attr("transform", "scale(0, 1)");
        } else {
          cutout
            .attr("width", rect.attr("width"))
            .attr("transform", rect.attr("transform"))
            .transition(tx)
            .attr("width", cellWidth)
            .attr("transform", translateLeftHalfCell);
        }
        if (selectedTerm !== lastSelectedTerm) {
          // reattach cutout to replay fade-in keyframes
          cutoutGroup.append(() => cutout.node());
          thisCutoutRef.lastSelectedTerm = selectedTerm;
        }
      } else {
        sel.classed("selected", false);
      }
    });
  };

  renderTable = () => {
    const {data, selectedTerm} = this.props;
    const svg = this.svg!;
    const {allEssentialMessage, allCoveredMessage} = this;
    const {cutoutGroup} = this.cutout!;
    const {hide, width, height, contentHeight} = this.state;
    const tx = (svg
      .transition("tx")
      .duration(300)
      .ease(hide ? d3.easeSinIn : d3.easeSinOut) as unknown) as AnyTransition;
    const ty = (svg
      .transition("ty")
      .duration(300)
      .ease(hide ? d3.easeSinOut : d3.easeSinIn) as unknown) as AnyTransition;
    this.transitions = {tx, ty};

    svg.attr("viewBox", `0 0 ${width} ${height}`).attr("height", height).attr("width", width);
    // .style("padding", "0px 4px");
    svg.selectAll("g.y.axis>line.domain").transition(ty).attr("y2", contentHeight);

    // svg.selectAll("g.content")
    //   .transition(ty)
    //   .attr("transform", `translate(0, ${(height - contentHeight) / 2})`);
    svg
      .selectAll<BaseType, null>("g.cols")
      .selectAll<SVGGElement, Term>("g.column")
      .data<Term>(data.terms, (d) => d.term)
      .join(this.enterColumn, this.updateColumn);
    svg
      .selectAll<BaseType, null>("g.rows")
      .selectAll<SVGGElement, Row>("g.row")
      .data<Row>(data.rows, (row) => row.index)
      .join(this.enterRow, this.updateRow)
      .selectAll<SVGGElement, Cell>("g.cell")
      .data<Cell>(
        (row: Row) => row.cols,
        (col) => col.term
      )
      .join(this.enterCell, this.updateCell);

    if (allEssentialMessage) {
      if (hide) {
        svg
          .classed("all-hidden", true)
          .selectAll("g.axis")
          .transition(tx)
          .attr("opacity", 0)
          .on("end", () => {
            allEssentialMessage.classed("visible", true);
          });
      } else {
        allEssentialMessage.classed("visible", false);
        svg.classed("all-hidden", false).selectAll("g.axis").transition(tx).attr("opacity", 1);
      }
    } else if (allCoveredMessage) {
      if (hide) {
        //allCoveredMessage.style("height", `${(contentHeight - margin.top - margin.bottom)}px`)
        tx.on("end", () => {
          allCoveredMessage.classed("visible", true);
        });
      } else {
        allCoveredMessage.classed("visible", false);
      }
    }

    cutoutGroup.classed("active", typeof selectedTerm === "number");
  };

  render() {
    const {onClick, primeType, termType} = this.props;
    const switchDisabled = this.props.data.noPrimesEssential;
    return (
      <Grid container item direction="row" className={this.props.className} spacing={2} onClick={onClick}>
        <Grid item className="layout-container" xs={12}>
          <div className="coverage-table-div clicky" ref={this.divRef} style={this.divStyle} />
          <div className="legend">
            <FormControlLabel
              label="Hide Essentials"
              // labelPlacement="start"
              className="hide-essentials-switch clicky"
              control={
                <Switch
                  checked={this.state.hide}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.handleHide(e.target.checked)}
                  disabled={switchDisabled}
                  title={switchDisabled ? "No prime implicants are essential." : ""}
                />
              }
            />
            <div className="dot" />
            <div className="legend-label">Covered</div>
            <div className="rect essential" />
            <div className="legend-label">Essential prime {primeType}</div>
            <div className="rect covered" />
            <div className="legend-label">
              <span style={{textTransform: "capitalize"}}>{termType}</span> covered by essential {primeType}
            </div>
          </div>
        </Grid>
      </Grid>
    );
  }

  componentDidMount() {
    this.initialize();
  }

  componentDidUpdate() {
    this.renderTable();
  }

  componentWillUnmount() {
    this.recomputeScaleObserver.disconnect();
  }
}

export default CoverageTable;
