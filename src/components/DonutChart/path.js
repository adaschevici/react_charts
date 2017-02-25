import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PathView from './path_view';

class Path extends Component {

  render() {
    return (
      <PathView
        pie={this.props.pie}
        data={this.props.data}
        color={this.props.color}
        height={this.props.height}
        width={this.props.width}
        chartType={this.props.chartType}
      />
    );
  }
}

const mapStateToProps = (state) => {
  console.log('Map state');
  console.log(state);
  return {};
};

const mapDispatchToProps = (dispatch) => {
  console.log('Map dispatch');
  return bindActionCreators({
  }, dispatch);
};

Path.propTypes = {
  width: React.PropTypes.number.isRequired,
  height: React.PropTypes.number.isRequired,
  data: React.PropTypes.arrayOf(PropTypes.object).isRequired,
  pie: React.PropTypes.func.isRequired,
  color: React.PropTypes.func.isRequired,
  chartType: React.PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Path);
