import React from 'react';
import * as d3 from 'd3';

import Path from './path';
import Legend from './legend';

const DonutChartView = (props) => {
  const { id, width, height, updateData, data, chartType, padAngle } = props;
  const pie = d3.pie()
    .value(d => d.count)
    .padAngle(padAngle)
    .sort(null);

  const color = d3.scaleOrdinal()
    .range(['#68c8d7', '#eccd63', '#bb8cdd', '#de6942', '#52b36e', '#bbc7d9']);

  return (
    <div>
      <svg
        id={id}
        width={width}
        height={height}
        className="shadow"
        onClick={updateData}
      >

        <Path
          width={width}
          height={height}
          pie={pie}
          color={color}
          data={data}
          chartType={chartType}
        />

        <Legend
          pie={pie}
          color={color}
          data={data}
          width={width}
          height={height}
        />
      </svg>
    </div>
  );
};

DonutChartView.propTypes = {
  width: React.PropTypes.number.isRequired,
  height: React.PropTypes.number.isRequired,
  padAngle: React.PropTypes.number.isRequired,
  id: React.PropTypes.string.isRequired,
  chartType: React.PropTypes.string.isRequired,
  updateData: React.PropTypes.func.isRequired,
  data: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
};

export default DonutChartView;
