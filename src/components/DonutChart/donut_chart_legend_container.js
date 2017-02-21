import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as d3 from 'd3';

import DonutChartLegendView from './donut_chart_legend_view';

class DonutChartLegendContainer extends Component {
  constructor (props) {
    super(props);
  }

  getLegend () {
    const _self = this;
    const texts = (this.props.pie(this.props.data)).map(function(d, i) {
      const transform = "translate(10," + i * 30 + ")";
      const rectStyle = {
        fill: _self.props.color(i),
        stroke: _self.props.color(i)

      };

      const textStyle = {
        fill: _self.props.color(i)
      };

      return (
        <g transform={transform} key={i}>
          <rect width="20" height="20" style={rectStyle} rx="2" rx="2"/>
          <text x="30" y="15" className="browser-legend" style={textStyle}>{d.data.name}</text>
        </g>
      );
    });

    return texts;
  }

  render () {
    const texts = this.getLegend();
    return (
      <DonutChartLegendView
        transform={this.transform}
        texts={texts}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
  }, dispatch);
};

DonutChartLegendContainer.propTypes = {
  width: React.PropTypes.number,
  height: React.PropTypes.number,
  data: React.PropTypes.array,
  pie: React.PropTypes.func,
  color: React.PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(DonutChartLegendContainer);
