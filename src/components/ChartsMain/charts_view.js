import React from 'react';
import DonutChartContainer from '../DonutChart/donut_chart_container';

import css from '../../../src/public/style.css';

const ChartsView = function (props) {
  return (
    <div className="row">
      <div className="col-xs-7">
        <div className="bottom-left">
          <DonutChartContainer id="testId" padAngle={0.03} />
        </div>
      </div>
    </div>
  );
};

export default ChartsView;
