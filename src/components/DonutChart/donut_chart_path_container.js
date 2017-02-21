import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as d3 from 'd3';

import DonutChartPathView from './donut_chart_paths_view';

class DonutChartPathContainer extends Component {
  constructor (props) {
    super(props);
    const radius = this.props.height;

    const outerRadius = radius/2;
    const innerRadius = radius/3.3;

    this.arc = d3.arc()
      .outerRadius(outerRadius)
      .innerRadius(innerRadius);

    this.transform = 'translate(' + radius/2 + ',' + radius/2 + ')';
  }

  getPaths () {
    const _self = this;
    const paths = (this.props.pie(this.props.data)).map(function(d, i) {
      return (
        <path fill={_self.props.color(i)} d={_self.arc(d)} key={i} />
      );
    });

    return paths;
  }

  render () {
    const paths = this.getPaths();
    console.log(paths);
    return (
      <DonutChartPathView
        transform={this.transform}
        paths={this.getPaths()}
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

DonutChartPathContainer.propTypes = {
  width: React.PropTypes.number,
  height: React.PropTypes.number,
  data: React.PropTypes.array,
  pie: React.PropTypes.func,
  color: React.PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(DonutChartPathContainer);
