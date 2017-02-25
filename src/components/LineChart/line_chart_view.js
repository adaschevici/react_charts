import React from 'react';
import * as d3 from 'd3';

import LineChartAxisContainer from './line_chart_axis_container';

const LineChartView = (props) => {
  const data = [
    {day:'02-11-2016',count:180},
    {day:'02-12-2016',count:250},
    {day:'02-13-2016',count:150},
    {day:'02-14-2016',count:496},
    {day:'02-15-2016',count:140},
    {day:'02-16-2016',count:380},
    {day:'02-17-2016',count:100},
    {day:'02-18-2016',count:150}
  ];

  const margin = {top: 5, right: 50, bottom: 20, left: 50},
    w = props.width - (margin.left + margin.right),
    h = props.height - (margin.top + margin.bottom);

  const parseDate = d3.time.format("%m-%d-%Y").parse;

  data.forEach(d => {
    d.date = parseDate(d.day);
  });

  const x = d3.time.scale()
    .domain(d3.extent(data, d => d.date ))
    .rangeRound([0, w]);

  const y = d3.scale.linear()
    .domain([0, d3.max(data, d => d.count + 100 )])
    .range([h, 0]);

  const yAxis = d3.svg.axis()
    .scale(y)
    .orient('left')
    .ticks(5);

  const xAxis = d3.svg.axis()
    .scale(x)
    .orient('bottom')
    .tickValues(data.map( (d,i) => {
      if(i>0)
        return d.date;
    }).splice(1))
    .ticks(4);

  const xGrid = d3.svg.axis()
    .scale(x)
    .orient('bottom')
    .ticks(5)
    .tickSize(-h, 0, 0)
    .tickFormat('');


  const yGrid = d3.svg.axis()
    .scale(y)
    .orient('left')
    .ticks(5)
    .tickSize(-w, 0, 0)
    .tickFormat('');


  const interpolations = [
    'linear',
    'step-before',
    'step-after',
    'basis',
    'basis-closed',
    'cardinal',
    'cardinal-closed'];

  const line = d3.svg.line()
    .x(d => x(d.date))
    .y(d => y(d.count))
    .interpolate(interpolations[5]);


  const transform=`translate(${margin.left, margin.top})`;

  return (
    <div>
      <svg id={props.chartId} width={props.width} height={props.height}>

        <g transform={transform}>

          <Grid h={h} grid={yGrid} gridType="y"/>
          {/*<Grid h={h} grid={xGrid} gridType="x"/> */}

          <Axis h={h} axis={yAxis} axisType="y" />
          <Axis h={h} axis={xAxis} axisType="x"/>

          <path className="line shadow" d={line(data)} strokeLinecap="round"/>

          <Dots data={data} x={x} y={y} showToolTip={props.showToolTip} hideToolTip={props.hideToolTip}/>

          <ToolTip tooltip={props.tooltip}/>
        </g>
      </svg>
    </div>
  );
}

export default LineChartView;
