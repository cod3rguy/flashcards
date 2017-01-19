import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Redirect, hashHistory} from 'react-router';
import Layout from './includes/layouts/default.jsx';
import Home from './includes/pages/home.jsx';
import Create from './includes/pages/create.jsx';

ReactDOM.render(
  <Router history={hashHistory}>
    <Redirect from="/" to="/home" />
    <Route path="/" component={Layout}>
      <Route path="home" component={Home} />
      <Route path="create" component={Create} />
      <Redirect from="*" to="/home" />
    </Route>
  </Router>
  ,document.getElementById('root')
);