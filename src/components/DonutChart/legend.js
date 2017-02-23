import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import LegendView from './legend_view';

class Legend extends Component {
  constructor (props) {
    super(props);
  }



  render () {
    const transform = "translate(" + (this.props.width / 2 + 80) + ",55)";
    return (
      <LegendView
        transform={transform}
        data={this.props.data}
        color={this.props.color}
        pie={this.props.pie}
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

Legend.propTypes = {
  width: React.PropTypes.number,
  height: React.PropTypes.number,
  data: React.PropTypes.array,
  pie: React.PropTypes.func,
  color: React.PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Legend);
