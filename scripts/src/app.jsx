import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Redirect, hashHistory} from 'react-router';
import Layout from './includes/layouts/default.jsx';
import Home from './includes/pages/home.jsx';
import Create from './includes/pages/create.jsx';

if(!localStorage.getItem('decks')) localStorage.setItem('decks',JSON.stringify([]));

ReactDOM.render(
  <Router history={hashHistory}>
    <Redirect from="/" to="/home" />
    <Route path="/" component={Layout}>
      <Route path="home" component={Home} />
      <Route path="create" component={Create} />
      <Route path="edit/" component={Create} />
      <Redirect from="*" to="/home" />
    </Route>
  </Router>
  ,document.getElementById('root')
);