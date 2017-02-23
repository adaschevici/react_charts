import React from 'react';

import Path from './path';
import Legend from './legend';

const DonutChartView = function (props) {
  return (
    <div>
      <svg id={props.id} width={props.width}
        height={props.height} className="shadow" onClick={props.updateData}>

        <Path width={props.width} height={props.height}
          pie={props.pie} color={props.color} data={props.data}/>

        <Legend pie={props.pie} color={props.color} data={props.data}
          width={props.width} height={props.height}/>
      </svg>
    </div>
  );
};

export default DonutChartView;
