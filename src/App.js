import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Layout from './layout'
import About from './routes/about'
import Home from './routes/home'
import Contact from './routes/contact'

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Layout>
      </Router>
    )
  }
}

export default App;
