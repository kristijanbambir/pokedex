import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../screens/App';
import Home from '../screens/App/screens/Home';
import MyPokemon from '../screens/App/screens/MyPokemon';

const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='my' component={MyPokemon} />
  </Route>
);

export default routes;
