import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PathView from './path_view';

class Path extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <PathView
        pie={this.props.pie}
        data={this.props.data}
        color={this.props.color}
        height={this.props.height}
        width={this.props.width}
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

Path.propTypes = {
  width: React.PropTypes.number,
  height: React.PropTypes.number,
  data: React.PropTypes.array,
  pie: React.PropTypes.func,
  color: React.PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Path);
