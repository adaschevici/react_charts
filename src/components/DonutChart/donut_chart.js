import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import DonutChartView from './donut_chart_view';

class DonutChart extends Component {
  constructor(props) {
    super(props);
    const data = [
      { name: 'IE', count: 40 },
      { name: 'Chrome', count: 32 },
      { name: 'Safari', count: 14 },
      { name: 'Firefox', count: 9 },
      { name: 'Others', count: 6 },
    ];

    this.updateData = this.updateData.bind(this);

    this.state = {
      data,
    };
  }

  updateData() {
    const data = [
      { name: 'IE', count: Math.random() },
      { name: 'Chrome', count: Math.random() },
      { name: 'Safari', count: Math.random() },
      { name: 'Firefox', count: Math.random() },
      { name: 'Others', count: Math.random() },
      { name: 'Opera', count: Math.random() },

    ];

    this.setState({ data });
  }

  render() {
    return (
      <DonutChartView
        id={this.props.id}
        width={this.props.width}
        height={this.props.height}
        updateData={this.updateData}
        data={this.state.data}
        padAngle={this.props.padAngle}
        chartType={this.props.chartType}
      />);
  }
}

DonutChart.propTypes = {
  width: React.PropTypes.number,
  height: React.PropTypes.number,
  padAngle: React.PropTypes.number,
  id: React.PropTypes.string.isRequired,
  chartType: React.PropTypes.string.isRequired,
};

const mapStateToProps = () => {
  console.log('Mapping');
  return {};
};

const mapDispatchToProps = (dispatch) => {
  console.log('Mapping');
  return bindActionCreators({
  }, dispatch);
};

DonutChart.defaultProps = {
  width: 450,
  height: 250,
  padAngle: 0,
};

export default connect(mapStateToProps, mapDispatchToProps)(DonutChart);
