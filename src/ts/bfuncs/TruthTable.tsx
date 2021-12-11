import React, { Component } from "react";
import * as d3 from "d3";
import { BaseType, Selection } from "d3";
import clsx from "clsx";
import { Pagination } from "@material-ui/lab";
import { BooleanFunctionSpec, bytesToBigInt, functionBytes } from "./jsUtils";

interface MarginSpec {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

interface SizeSpec {
  blockSize: number;
  blockMargin: number;
  chunkSizeExponent: number;
  chunksPerPage: number;
  tickPadding: number;
  margin: MarginSpec;
}

type TruthTableProps = {
  f: Int8Array | BooleanFunctionSpec;
  arity: number;
  size: "small" | "medium" | "large";
  className?: string;
} & Partial<SizeSpec> &
  typeof TruthTable.defaultProps;

interface TruthTableState {
  values: Int8Array;
  numChunks: number;
  rowsPerChunk: number;
  page: number;
  functionIndex: bigint | null;
}

function computeStateFromProps(props: TruthTableProps): TruthTableState {
  let { f, arity, chunkSizeExponent, size, fullySpecified } = props;
  chunkSizeExponent ??= TruthTable.sizes[size].chunkSizeExponent;
  const values = f instanceof Int8Array ? f : functionBytes(f, arity);
  const cse = Math.min(arity, chunkSizeExponent);
  const rowsPerChunk = 1 << cse;
  return {
    values,
    rowsPerChunk,
    numChunks: 1 << (31 - Math.clz32(values.length) - cse),
    page: 0,
    functionIndex: fullySpecified && arity <= 5 ? bytesToBigInt(values, true) : null,
  };
}

function dataBoolVal(x: number): string {
  switch (x) {
    case 0:
      return "false";
    case 1:
      return "true";
    case -1:
      return "undefined";
    default:
      return "";
  }
}

class TruthTable extends Component<TruthTableProps, TruthTableState> {
  static defaultProps = {
    size: "medium",
    maxArity: 16,
    fullySpecified: false,
  };
  static sizes: { small: SizeSpec; medium: SizeSpec; large: SizeSpec } = {
    large: {
      blockSize: 40,
      blockMargin: 4,
      margin: { top: 0, left: 40, bottom: 0, right: 0 },
      tickPadding: 8,
      chunkSizeExponent: 4,
      chunksPerPage: 2,
    },
    medium: {
      blockSize: 26,
      blockMargin: 2,
      margin: { top: 0, left: 32, bottom: 0, right: 0 },
      tickPadding: 6,
      chunkSizeExponent: 5,
      chunksPerPage: 2,
    },
    small: {
      blockSize: 14,
      blockMargin: 1,
      margin: { top: 0, left: 32, bottom: 0, right: 0 },
      tickPadding: 4,
      chunkSizeExponent: 6,
      chunksPerPage: 4,
    },
  };
  divRef;

  constructor(props: TruthTableProps) {
    super(props);
    this.divRef = React.createRef<HTMLDivElement>();
    this.state = computeStateFromProps(props);
  }

  componentDidMount() {
    this.initialize();
    this.renderTable();
  }

  initialize = () => {
    d3.select(this.divRef.current).selectAll("svg.chunk").remove();
  };

  renderTable = () => {
    if (!this.divRef.current) return;

    const bst = TruthTable.sizes[this.props.size];
    const sel = d3.select(this.divRef.current);
    const {
      arity,
      blockSize = bst.blockSize,
      blockMargin = bst.blockMargin,
      margin = bst.margin,
      tickPadding = bst.tickPadding,
      chunksPerPage = bst.chunksPerPage,
    } = this.props;

    const { values, numChunks, rowsPerChunk, page } = this.state;

    const nCols = arity + 1;
    const width = blockSize * nCols + margin.left + margin.right;
    const height = blockSize * rowsPerChunk + margin.top + margin.bottom;
    const rowsPerPage = chunksPerPage * rowsPerChunk;

    const y = d3
      .scaleLinear()
      .domain([0, rowsPerChunk])
      .range([margin.top, height - margin.bottom]);

    const x = d3
      .scaleLinear()
      .domain([0, nCols])
      .range([margin.left, width - margin.right]);

    const yAxis = (g: Selection<SVGGElement, any, any, any>, chunk: number) =>
      g
        .attr("transform", `translate(${margin.left}, ${blockSize / 2})`)
        .call(
          d3
            .axisLeft(y)
            .tickValues(d3.range(0, rowsPerChunk, 4))
            .tickFormat((x) =>
              String(
                page * rowsPerPage +
                  chunk * rowsPerChunk +
                  (typeof x === "number" ? x : x.valueOf())
              )
            )
            .tickSize(0)
            .tickPadding(tickPadding)
        )
        .call((g) => g.select(".domain").remove())
        .call((g) =>
          g
            .append("text")
            .attr("x", -margin.left)
            .attr("y", 10)
            .attr("fill", "currentColor")
            .attr("text-anchor", "start")
        );
    sel
      .selectAll("svg.chunk")
      .data(d3.range(0, Math.min(numChunks, chunksPerPage)))
      .join(
        (enter) =>
          enter
            .append("svg")
            .classed("chunk", true)
            .attr("width", width)
            .attr("height", height)
            .attr("viewBox", `0 0 ${width} ${height}`)
            .attr("preserveAspectRatio", "xMinYMin meet")
            .each(function (i) {
              d3.select(this).append("g").classed("y-axis", true).call(yAxis, i);
            }),
        (update) =>
          update
            .attr("width", width)
            .attr("height", height)
            .attr("viewBox", `0 0 ${width} ${height}`)
            .attr("preserveAspectRatio", "xMinYMin meet")
            .each(function (i) {
              d3.select(this).select<SVGGElement>("g.y-axis").call(yAxis, i);
            }),
        this.removeSelection
      )
      .selectAll(".row")
      .data((i) => d3.range(i * rowsPerChunk, (i + 1) * rowsPerChunk))
      .join(
        (enter) =>
          enter
            .append("g")
            .classed("row", true)
            .attr("transform", (_, i) => `translate(0, ${y(i)})`)
            .each(function (d) {
              //const i = i +
              const sel = d3.select(this);
              const i = page * rowsPerPage + d;
              for (let j = 0; j < arity; j++) {
                sel
                  .append("rect")
                  .classed("datum", true)
                  .attr("data-boolval", (i & (1 << (arity - j - 1))) != 0)
                  .attr("x", x(j) + blockMargin)
                  .attr("y", blockMargin)
                  .attr("width", blockSize - 2 * blockMargin)
                  .attr("height", blockSize - 2 * blockMargin);
              }
              sel
                .append("rect")
                .classed("datum", true)
                .classed("output", true)
                .attr("data-boolval", dataBoolVal(values[i]))
                .attr("x", x(arity) + blockMargin)
                .attr("y", blockMargin)
                .attr("width", blockSize - 2 * blockMargin)
                .attr("height", blockSize - 2 * blockMargin)
                .append("title")
                .text(i);
            }),
        (update) =>
          update.each(function (d) {
            const row = this as SVGElement;
            const childs = row.children as HTMLCollectionOf<HTMLElement | SVGElement>;
            const i = page * rowsPerPage + d;
            for (let j = 0; j < arity; j++) {
              childs[j].dataset.boolval = String((i & (1 << (arity - j - 1))) != 0);
            }
            childs[arity].dataset.boolval = dataBoolVal(values[i]);
            // d3.select(childs[arity].firstElementChild!).transition().text(String(i))
            childs[arity].firstElementChild!.textContent = String(i);
          }),
        this.removeSelection
      );
  };

  removeSelection = (exit: Selection<BaseType, any, any, unknown>) => exit.remove();

  changePage = (event: React.ChangeEvent<unknown>, value: number) => {
    this.setState({ page: value - 1 });
  };

  render() {
    const {
      arity,
      maxArity,
      chunksPerPage = TruthTable.sizes[this.props.size].chunksPerPage,
    } = this.props;
    const { page, numChunks } = this.state;
    return (
      <div className={clsx("TruthTable", this.props.className, this.props.size)}>
        {arity > maxArity ? (
          <div className="suppressed-message">
            Truth table suppressed for function of more than {this.props.maxArity} arguments.
          </div>
        ) : (
          <>
            {numChunks > chunksPerPage && (
              <Pagination
                className="pagination"
                page={page + 1}
                count={numChunks / chunksPerPage}
                onChange={this.changePage}
              />
            )}
            <div ref={this.divRef} className="chunks" />
          </>
        )}
      </div>
    );
  }

  componentDidUpdate(
    prevProps: Readonly<TruthTableProps>,
    prevState: Readonly<TruthTableState>,
    snapshot?: any
  ) {
    const props = this.props;
    if (
      prevProps.f !== props.f ||
      prevProps.arity !== props.arity ||
      prevProps.chunkSizeExponent !== props.chunkSizeExponent ||
      (this.props.chunkSizeExponent == null && props.size !== prevProps.size)
    ) {
      this.initialize();
      this.setState(computeStateFromProps(this.props));
    } else {
      this.renderTable();
    }
  }
}

export default TruthTable;
