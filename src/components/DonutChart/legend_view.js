import React from 'react';

const LegendView = function (props) {
  const style = {
    visibility: 'visible'
  };

  return (
    <g is transform={props.transform} style={style}>
      {props.texts}
    </g>
  );
};

export default LegendView;
