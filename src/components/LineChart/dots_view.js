import React from 'react';
import * as d3 from 'd3';




const DotsView = (props) => {
  let _self = this;
  const data = props.data.splice(1);

  const circles = data.map((d, i) => <circle
    className="dot" r="7"
    cx={_self.props.x(d.date)} cy={_self.props.y(d.count)} fill="#7dc7f4"
    stroke="#3f5175" strokeWidth="5px" key={i}
    onMouseOver={_self.props.showToolTip} onMouseOut={_self.props.hideToolTip}
    data-key={d3.time.format('%b %e')(d.date)} data-value={d.count}
    />;
  );

  return (
    { circles }
  );
};

export default GridView;

