import React from 'react';
import * as d3 from 'd3';

const calculateRadius = function (props) {
  console.log(props.chartType);
  return {
    radius: props.height,
    innerRadius: props.chartType === 'pie' ? 0 : props.height/3.3,
    outerRadius: props.height/2
  };
}

const displayTransform = function (props) {
  const {radius} = calculateRadius(props);
  const transform = `translate(${radius/2},${radius/2})`;
  return transform;
}

const renderPaths = function (props) {
  const { radius, innerRadius, outerRadius } = calculateRadius(props);

  const arc = d3.arc()
    .outerRadius(outerRadius)
    .innerRadius(innerRadius);

  const transform = displayTransform(props);

  const paths = (props.pie(props.data)).map(function(d, i) {
    return (
      <path fill={props.color(i)} d={arc(d)} key={i} />
    );
  });

  return paths;
}

const PathView = function (props) {
  const transform = displayTransform(props);
  return (
    <g transform={transform}>
      {renderPaths(props)}
    </g>
  );
};

export default PathView;
