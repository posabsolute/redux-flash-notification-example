import React from 'react';
import { Route } from 'react-router';

/* containers */
import { App } from 'containers/App';
import Test from 'components/test/test.js';

export default (
  <Route path="/" component={App}>
    <Route path="test" component={Test} />
  </Route>
);
