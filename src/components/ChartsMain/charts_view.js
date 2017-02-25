import React from 'react';
import DonutChart from '../DonutChart/donut_chart';
// import LineChartContainer from '../LineChart/line_chart_container';
//             <LineChartContainer id="testLineChart"/>
const ChartsView = () => (
  <div>
    <div className="row">
      <div className="col-xs-12" >
        <div className="top">
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-xs-7">
        <div className="bottom-left">
          <DonutChart id="testId" padAngle={0.03} chartType="pie" />
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-xs-7">
        <div className="bottom-left">
          <DonutChart id="testId" padAngle={0.03} chartType="donut" />
        </div>
      </div>
    </div>
  </div>
);

export default ChartsView;
