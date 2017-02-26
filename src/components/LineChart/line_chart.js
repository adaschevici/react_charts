import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import LineChartView from './line_chart_view';

class LineChart extends Component {

  constructor(props) {
    super(props);
    this.data = [
        {day:'02-11-2016',count:180},
        {day:'02-12-2016',count:250},
        {day:'02-13-2016',count:150},
        {day:'02-14-2016',count:496},
        {day:'02-15-2016',count:140},
        {day:'02-16-2016',count:380},
        {day:'02-17-2016',count:100},
        {day:'02-18-2016',count:150}
    ];
  }

  render() {
    return (<LineChartView
      chartId={this.props.id}
      width={width}
      height={height}
      showToolTip={this.showToolTip}
      hideToolTip={this.hideToolTip}
    />);
  }
}

const mapStateToProps = (state) => {
  console.log('Mapping state to props');
  console.log(state);
  return {};
};

const mapDispatchToProps = (dispatch) => {
  console.log('Mapping dispatch');
  return bindActionCreators({
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(LineChart);
