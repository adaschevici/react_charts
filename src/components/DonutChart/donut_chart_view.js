import React from 'react';

import DonutChartPathContainer from './donut_chart_path_container';
import DonutChartLegendContainer from './donut_chart_legend_container';
import css from '../../../src/public/style.css';

const DonutChartView = function (props) {
  return (
    <div>
      <svg id={props.id} width={props.width}
        height={props.height} className="shadow" onClick={props.updateData}>

        <DonutChartPathContainer width={props.width} height={props.height}
          pie={props.pie} color={props.color} data={props.data}/>

        <DonutChartLegendContainer pie={props.pie} color={props.color} data={props.data}
          width={props.width} height={props.height}/>
      </svg>
    </div>
  );
};

export default DonutChartView;
