import React, { Component } from 'react';
import './App.css';

// importing components 

import Home from './components/Home';
import PortFolio from './components/PortFolio';
import About from './components/About';
import Contact from './components/Contact';
import Blog from './components/Blog';

// routes
import { Route, Router, IndexRoute, hashHistory }  from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={hashHistory}>
          <Route path="/" component={Home}>
          </Route>
          <Route path="/port" component={PortFolio}>
          </Route>
          <Route path="/about" component={About}>
          </Route>
          <Route path="/blog" component={Blog}>
          </Route>
        </Router>
      </div>
    );
  }
}

export default App;
