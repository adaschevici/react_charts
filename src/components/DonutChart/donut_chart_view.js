import React from 'react';
import * as d3 from 'd3';

import Path from './path';
import Legend from './legend';

const DonutChartView = function (props) {
  const pie = d3.pie()
    .value(function(d){ return d.count })
    .padAngle(props.padAngle)
    .sort(null);

  const color = d3.scaleOrdinal()
    .range(['#68c8d7','#eccd63','#bb8cdd','#de6942','#52b36e','#bbc7d9']);

  // tttt
  return (
    <div>
      <svg id={props.id} width={props.width}
        height={props.height} className="shadow" onClick={props.updateData}>

        <Path width={props.width} height={props.height}
          pie={pie} color={color} data={props.data} chartType={props.chartType} />

        <Legend pie={pie} color={color} data={props.data}
          width={props.width} height={props.height} />
      </svg>
    </div>
  );
};

export default DonutChartView;
