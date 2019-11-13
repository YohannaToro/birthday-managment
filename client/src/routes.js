// Dependencies
import React, { Profiler } from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import App from './App';
import Login from './components/register/signin';
import Todo from './components/administrator/profile';
import Create from './components/administrator/create-user';
import Modal from './components/additions/modalUpdate'


const Routes = () =>
  <App>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/profile" component={Todo} />
      <Route exact path="/create" component={Create} />
      <Route exact path="/modal" component={Modal} />
    </Switch>
  </App>;

export default Routes;