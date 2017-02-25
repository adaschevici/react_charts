import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import LegendView from './legend_view';

class Legend extends Component {

  render() {
    const transform = `translate(${((this.props.width / 2) + 80)},55)`;
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
  console.log(state);
  return {};
};

const mapDispatchToProps = (dispatch) => {
  console.log(dispatch);
  return bindActionCreators({
  }, dispatch);
};

Legend.propTypes = {
  width: PropTypes.number.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  pie: PropTypes.func.isRequired,
  color: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Legend);
