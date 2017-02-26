import React, { PropTypes } from 'react';
import * as d3 from 'd3';

const AxisView = (props) => {
  const translate = `translate(0, ${props.h})`;
  return (
    <g className="axis" transform={props.axisType === 'x' ? translate : ''} />
  );
};


export default AxisView;
