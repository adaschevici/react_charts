import React from 'react';
import * as d3 from 'd3';

const GridView = (props) => {
  const translate = `translate(0, ${(this.props.h)})`;
  return (
    <g className="y-grid" transform={this.props.gridType === 'x' ? translate : ''} />
  );
};

export default GridView;
