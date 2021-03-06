import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Redirect, hashHistory} from 'react-router';
import Layout from './includes/layouts/default.jsx';
import Home from './includes/pages/home.jsx';
import Deck from './includes/pages/deck.jsx';
import Create from './includes/pages/create.jsx';
import Edit from './includes/pages/edit.jsx';
import {Data} from './includes/data-config.js';

if(!localStorage.getItem('decks')) localStorage.setItem('decks',JSON.stringify(Data));

const chkDeckID = function(nextState, replace) {
  let deckIDs = JSON.parse(localStorage.decks).map(e => e.deckID);
  if(!deckIDs.find(e => e === Number(nextState.params.deckID))) {
    replace(`/home`);
  }
};

ReactDOM.render(
  <Router history={hashHistory}>
    <Redirect from="/" to="/home" />
    <Route path="/" component={Layout}>
      <Route path="home" component={Home} />
      <Route path="deck/:deckID" component={Deck} onEnter={chkDeckID} />
      <Route path="create" component={Create} />
      <Route path="edit/:deckID" component={Edit} onEnter={chkDeckID} />
      <Redirect from="*" to="/home" />
    </Route>
  </Router>
  ,document.getElementById('root')
);