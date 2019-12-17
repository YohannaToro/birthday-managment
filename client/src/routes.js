// Dependencies
import React, { Profiler } from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import App from './App';
import Login from './components/register/signin';
import Todo from './components/administrator/profile';
import Create from './components/administrator/create-user';
import Modal from './components/additions/modalUpdate'
import not from './components/additions/404'
import block from './components/administrator/block'
import micro from './components/additions/microsoft'
import massive from './components/additions/massive'

const Routes = () =>
  <App>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/profile" component={Todo} />
      <Route exact path="/create" component={Create} />
      <Route exact path="/uploadImage" component={Modal} />
      <Route exact path="/block" component={block} />
      <Route exact path="/login" component={micro} />
      <Route exact path="/massive" component={massive} />
      
      <Route component={not}/>
    </Switch>
  </App>;

export default Routes;