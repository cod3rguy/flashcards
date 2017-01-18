import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Redirect, hashHistory} from 'react-router';
import Layout from './includes/layouts/default.jsx';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      Test
    </Route>
  </Router>
  ,document.getElementById('root')
);