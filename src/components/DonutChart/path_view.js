import React from 'react';

const DonutChartPathView = function (props) {
  return (
    <g transform={props.transform}>
      {props.paths}
    </g>
  );
};

export default DonutChartPathView;
