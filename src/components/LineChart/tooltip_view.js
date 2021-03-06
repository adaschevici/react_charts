import React from 'react';
import * as d3 from 'd3';


const TooltipView = (props) => {

  const visibility = 'hidden';
  const transform = '';
  const x = 0;
  const y = 0;
  const width = 150;
  const height = 70;
  const transformText = `translate(${width / 2},${(height / 2) - 5})`;
  const transformArrow = '';
  const tooltipDataValueString = `${this.props.tooltip.data.value} visits`;

  if (this.props.tooltip.display == true) {
    const position = this.props.tooltip.pos;

    x = position.x;
    y = position.y;
    visibility = 'visible';

    if (y > height) {
      transform = `translate(${x - width / 2}, ${y - height - 20})`;
      transformArrow = `translate(${(width / 2 - 20)}, ${height - 2}`;
    } else if ( y < height) {
      transform = `translate(${x - width / 2}, ${Math.round(y) + 20})`;
      transformArrow = `translate(${width / 2 - 20}, 0) rotate(180,20,0)`;
    }
  } else {
      visibility = 'hidden';
  }

  return (
    <g transform={transform}>
      <rect class="shadow" is width={width} height={height} rx="5" ry="5" visibility={visibility} fill="#6391da" opacity=".9" />
      <polygon
        class="shadow" is points="10,0  30,0  20,10" transform={transformArrow}
        fill="#6391da" opacity=".9" visibility={visibility}
      />
      <text is visibility={visibility} transform={transformText}>
        <tspan is x="0" text-anchor="middle" font-size="15px" fill="#ffffff">{this.props.tooltip.data.key}</tspan>
        <tspan is x="0" text-anchor="middle" dy="25" font-size="20px" fill="#a9f3ff">{`${this.props.tooltip.data.value} visits`}</tspan>
      </text>
    </g>
  );
};

export default TooltipView;

