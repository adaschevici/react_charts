import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import DonutChartPathView from './donut_chart_paths_view';

class DonutChartPathContainer extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
        <DonutChartPathView
          transform={this.transform}
          paths={this.getPaths()}
        />
    );
  }
}
