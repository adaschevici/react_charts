import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as d3 from 'd3';

import DonutChartView from './donut_chart_view';


class DonutChartContainer extends Component {
  constructor (props) {
    super(props);
    const data = [
      { name: 'IE', count: 40 },
      { name: 'Chrome', count: 32 },
      { name: 'Safari', count: 14 },
      { name: 'Firefox', count: 9 },
      { name: 'Others', count: 6 }
    ];

    // this.setState({
    //   data: data,
    //   width: 0
    // });

    this.state = {
      data: data
    };

    this.pie = d3.pie()
      .value(function(d){ return d.count })
      .padAngle(this.props.padAngle)
      .sort(null);

    this.color = d3.scaleOrdinal()
      .range(['#68c8d7','#eccd63','#bb8cdd','#de6942','#52b36e','#bbc7d9']);
  }

  updateData () {
    const data = [
      { name: 'IE', count: Math.random() },
      { name: 'Chrome', count: Math.random() },
      { name: 'Safari', count: Math.random() },
      { name: 'Firefox', count: Math.random() },
      { name: 'Others', count: Math.random() },
      { name: 'Opera', count: Math.random() }

    ];

    this.setState({ 'data': data });
  }

  render () {
    return (
      <DonutChartView
        id={this.props.id}
        width={this.props.width}
        height={this.props.height}
        updateData={this.updateData}
        data={this.state.data}
        pie={this.pie}
        color={this.color}
      />);
  }
}

DonutChartContainer.propTypes = {
  width: React.PropTypes.number,
  height: React.PropTypes.number,
  padAngle: React.PropTypes.number,
  id: React.PropTypes.string.isRequired
};

const mapStateToProps = (state) => {
  if (state.appReducer.ancientsList.length > 0) {
    return {
    };
  }
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
  }, dispatch);
};

DonutChartContainer.defaultProps = {
  width: 450,
  height: 250,
  padAngle:0
};

export default connect(mapStateToProps, mapDispatchToProps)(DonutChartContainer);
