import React, { PropTypes } from 'react';

const renderLegend = (props) => {
  const texts = (props.pie(props.data)).map((d, i) => {
    const transform = `translate(10,${i * 30})`;
    const rectStyle = {
      fill: props.color(i),
      stroke: props.color(i),
    };

    const textStyle = {
      fill: props.color(i),
    };

    return (
      <g transform={transform} key={i}>
        <rect width="20" height="20" style={rectStyle} rx="2" />
        <text x="30" y="15" className="browser-legend" style={textStyle}>{d.data.name}</text>
      </g>
    );
  });

  return texts;
};

const LegendView = (props) => {
  const style = {
    visibility: 'visible',
  };

  return (
    <g is transform={props.transform} style={style}>
      {renderLegend(props)}
    </g>
  );
};

LegendView.propTypes = {
  transform: PropTypes.string.isRequired,
};

export default LegendView;
