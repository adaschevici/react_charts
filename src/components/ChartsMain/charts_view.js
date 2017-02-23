import React from 'react';
import DonutChartContainer from '../DonutChart/donut_chart_container';
import LineChartContainer from '../LineChart/line_chart_container';

const ChartsView = function (props) {
  return (
    <div>
      <div className="row">
        <div className="col-xs-12" >
          <div className="top">
            <LineChartContainer id="testLineChart"/>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-7">
          <div className="bottom-left">
            <DonutChartContainer id="testId" padAngle={0.03} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartsView;
