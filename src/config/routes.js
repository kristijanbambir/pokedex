import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../screens/App';
import Home from '../screens/App/screens/Home';

const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
  </Route>
);

export default routes;
