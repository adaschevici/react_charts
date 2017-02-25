import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import LineChartView from './line_chart_view';

class LineChartContainer extends Component {

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

const mapStateToProps = () => {
  console.log('Mapping state to props');
  return {};
};

const mapDispatchToProps = (dispatch) => {
  console.log('Mapping dispatch');
  return bindActionCreators({
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(LineChartContainer);
