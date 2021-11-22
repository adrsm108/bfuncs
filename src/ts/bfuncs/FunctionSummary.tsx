import React, {Component} from "react";
import * as d3 from "d3";
import {Arc, Pie, PieArcDatum, Selection} from "d3";
import clsx from "clsx";

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

type CountsArray = [on: number, off: number, unspecified: number];

type CountDatum = {
  name: string;
  value?: boolean;
  count: number;
};

type CountArcDatum = PieArcDatum<CountDatum> & {
  current?: CountArcDatum;
  target?: CountArcDatum;
};

type RadialChartProps = {
  counts: CountsArray;
  className?: string;
} & typeof RadialChart.defaultProps;

interface RadialChartState {
  // values: Int8Array;
  // numChunks: number;
  // rowsPerChunk: number;
  // page: number;
  // functionIndex: bigint | null;
}

function countsData([on, off, unspecified]: CountsArray): CountDatum[] {
  return [
    {
      name: "unspecified",
      value: undefined,
      count: unspecified,
    },
    {
      name: "on",
      value: true,
      count: on,
    },
    {
      name: "off",
      value: false,
      count: off,
    },
  ];
}
export class RadialChart extends Component<RadialChartProps, RadialChartState> {
  static defaultProps = {
    radius: 100,
    innerRadiusProportion: 0.8,
    padAngle: 0.001,
  };
  divRef;
  svg: Selection<SVGSVGElement, any, any, any>;
  pie: Pie<any, CountDatum>;
  arc: Arc<any, PieArcDatum<CountDatum>>;

  constructor(props: RadialChartProps) {
    super(props);
    this.divRef = React.createRef<HTMLDivElement>();
    this.svg = d3.create("svg").classed("chart", true);
    this.arc = d3.arc<any, PieArcDatum<CountDatum>>();
    this.pie = d3
      .pie<any, CountDatum>()
      .sort(null)
      .value((d) => d.count);

    this.state = {};
  }

  componentDidMount() {
    this.initialize();
    // this.renderChart();
  }

  initialize = () => {
    const {radius, innerRadiusProportion: p, padAngle, counts} = this.props;
    const d = 2 * radius;
    const pie = this.pie.padAngle(padAngle);
    const arc = this.arc.innerRadius(p * radius).outerRadius(radius);
    const initData = pie(countsData([1, 0, 0]));
    const targets = pie(countsData(counts));

    d3.select(this.divRef.current)
      .append(() =>
        this.svg
          .attr("height", d)
          .attr("width", d)
          .attr("viewBox", `${-radius} ${-radius} ${d} ${d}`)
          .attr("preserveAspectRatio", "xMinYMin meet")
          .node()
      )
      .selectAll("path.sector-arc")
      .data<CountArcDatum>(initData)
      .join("path")
      .classed("sector-arc", true)
      .attr("data-boolval", (d) => String(d.data.value))
      .attr("d", (d) => arc(d))
      .each((d) => (d.current = d))
      .call((path) =>
        path
          .transition()
          .duration(1000 * (1 - counts[0] / d3.sum(counts)) )
          .ease(d3.easeCubicInOut)
          .tween("data", (d, i) => {
            const interp = d3.interpolate(d.current, targets[i]);
            return (t) => (d.current = interp(t));
          })
          .attrTween("d", (d) => () => arc(d.current!) ?? "")
      );
  };

  updateChart = () => {
    const {padAngle, innerRadiusProportion: p, radius: r, counts} = this.props;

    const pie = this.pie.padAngle(padAngle);
    const arc = this.arc.innerRadius(r * p).outerRadius(r);
    const targets = pie(countsData(counts));

    this.svg
      .selectAll<SVGPathElement, CountArcDatum>("path.sector-arc")
      .transition()
      .duration(350)
      .tween("data", (d, i) => {
        const interp = d3.interpolate(d.current, targets[i]);
        return (t) => (d.current = interp(t));
      })
      .attrTween("d", (d) => () => arc(d.current!) ?? "");
  };

  formatTermCount = (n: number) => {
    if (n < 1e7) {
      return <div className="value exact">{d3.format(",~d")(n)}</div>;
    } else {
      const [mantissa, exponent] = d3
        .format(".2e")(n)
        .split(/[eE]\+?/);
      return (
        <div className="value approx">
          <span className="tilde">~</span>
          <span className="mantissa">{mantissa}</span>
          <span className="mult-sign">{"\u00d7"}</span>
          <span className="base">10</span>
          <sup className="exponent">{exponent}</sup>
        </div>
      );
    }
  };

  render() {
    const [on, off, unspecified] = this.props.counts;
    const nterms = on + off + unspecified;
    const formatPercent = d3.format(".1~%");
    return (
      <figure className={clsx("RadialChart", this.props.className)}>
        <div className="chart-container" ref={this.divRef}>
          <div className="center-label">
            {this.formatTermCount(nterms)}
            <div className="unit">{nterms === 1 ? "term" : "terms"}</div>
          </div>
        </div>
        <figcaption className="legend">
          <div className="icon" data-boolval="true" />
          <div className="value count" data-boolval="true">
            {this.formatTermCount(on)}
          </div>
          <div className="value percentage" data-boolval="true">
            ({formatPercent(on / nterms)})
          </div>
          <div className="label">True</div>
          <div className="icon" data-boolval="false" />
          <div className="value count" data-boolval="false">
            {this.formatTermCount(off)}
          </div>
          <div className="value percentage" data-boolval="true">
            ({formatPercent(off / nterms)})
          </div>
          <div className="label">False</div>
          {unspecified ? (
            <>
              <div className="icon" data-boolval="undefined" />
              <div className="value count" data-boolval="undefined">
                {this.formatTermCount(unspecified)}
              </div>
              <div className="value percentage" data-boolval="true">
                ({formatPercent(unspecified / nterms)})
              </div>
              <div className="label">Unspecified</div>
            </>
          ) : null}
        </figcaption>
      </figure>
    );
  }


  componentDidUpdate() {
    this.updateChart();
  }
}
