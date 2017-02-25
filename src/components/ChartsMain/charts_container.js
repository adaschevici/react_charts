import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ChartsView from './charts_view';

/* eslint-disable */
import css from '../../../src/public/style.css';
/* eslint-enable */

class ChartsContainer extends Component {
  render() {
    return <ChartsView />;
  }
}
const mapStateToProps = (state) => {
  if (state.appReducer.ancientsList.length > 0) {
    return {
    };
  }
  return {};
};

const mapDispatchToProps = (dispatch) => {
  console.log(dispatch);
  return bindActionCreators({
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ChartsContainer);
