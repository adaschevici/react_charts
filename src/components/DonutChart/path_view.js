import React from 'react';
import * as d3 from 'd3';

const calculateRadius = props => ({
  radius: props.height,
  innerRadius: props.chartType === 'pie' ? 0 : props.height / 3.3,
  outerRadius: props.height / 2,
});


const displayTransform = (props) => {
  const { radius } = calculateRadius(props);
  const transform = `translate(${radius / 2},${radius / 2})`;
  return transform;
};

const renderPaths = (props) => {
  const { innerRadius, outerRadius } = calculateRadius(props);

  const arc = d3.arc()
    .outerRadius(outerRadius)
    .innerRadius(innerRadius);

  const paths = (props.pie(props.data)).map((d, i) => (
    <path fill={props.color(i)} d={arc(d)} key={`${i}_key`} />
    ),
  );

  return paths;
};

const PathView = (props) => {
  const transform = displayTransform(props);
  return (
    <g transform={transform}>
      {renderPaths(props)}
    </g>
  );
};

export default PathView;
