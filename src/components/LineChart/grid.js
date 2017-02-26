import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import GridView from './grid_view';

class Grid extends Component {
  constructor(props) {
    super(props);
    this.renderGrid = this.renderGrid.bind(this);
    this.renderGrid();
  }

  renderGrid() {
    const node = ReactDOM.findDOMNode(this);
    d3.select(node).call(this.props.grid);
  }

  render() {
    return <GridView />;
  }

}

