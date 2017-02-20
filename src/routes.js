import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import App from './components/app';
import ChartsContainer from './components/ChartsMain/charts_container';

export default (
    <Route path="/" component={App} >
      <IndexRoute component={ChartsContainer} />
    </Route>
);
