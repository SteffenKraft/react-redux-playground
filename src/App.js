import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Layout from './layout'
import About from './routes/about'
import Home from './routes/home'
import Contact from './routes/contact'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <Layout>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Layout>
        </Router>
      </MuiThemeProvider>
    )
  }
}

export default App;
