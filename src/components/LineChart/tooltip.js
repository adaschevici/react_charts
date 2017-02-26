import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ToolTipView from './tooltip_view';

class ToolTip extends Component {

  constructor(props) {
    super(props);
    this.showToolTip = this.showToolTip.bind(this);
    this.hideToolTip = this.hideToolTip.bind(this);
  }

  showToolTip() {
    
  }

  hideToolTip() {
    
  }

  render() {
    return (
      <ToolTipView
        width={this.props.width}
        height={this.props.height}
        content={this.props.content}
      />
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(ToolTip);
