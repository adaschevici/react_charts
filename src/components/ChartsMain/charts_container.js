import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ChartsView from './charts_view';


class ChartsContainer extends Component {
  constructor (props) {
    super(props);
  }

  render () {
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
  return bindActionCreators({
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ChartsContainer);
