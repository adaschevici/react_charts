import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AxisView from './axis_view';

class Axis extends Component {
  constructor(props) {
    super(props);
    this.renderAxis = this.renderAxis.bind(this);
    this.renderAxis();
  }

  renderAxis() {
    const node = ReactDOM.findDOMNode(this);
    d3.select(node).call(this.props.axis);
  }

  render() {
    return <AxisView />;
  }

}
