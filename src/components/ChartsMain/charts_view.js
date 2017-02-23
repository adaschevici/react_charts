import React from 'react';
import DonutChart from '../DonutChart/donut_chart';
// import LineChartContainer from '../LineChart/line_chart_container';
//             <LineChartContainer id="testLineChart"/>
const ChartsView = function (props) {
  return (
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
            <DonutChart id="testId" padAngle={0.03} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartsView;
