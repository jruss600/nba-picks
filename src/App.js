import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Picks from './components/Picks';
import PlayoffPicks from './components/PlayoffPicks';
import { HashRouter, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <HashRouter basename='/'>
        <div className="App">
          <Header />
          <Route exact path="/" component={Picks} />
          <Route path="/playoff-picks" component={PlayoffPicks} />
        </div>
      </HashRouter>
    );
  }
}

export default App;