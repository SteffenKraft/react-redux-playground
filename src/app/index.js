import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import Layout from '../shared/layout'
import Gallery from '../routes/gallery/Gallery'
import Single from '../routes/single/Single'

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#eda821',
    textColor: '#333333'
  },
});


class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Router>
          <Layout>
            <Route exact path="/" component={Gallery} />
            <Route exact path="/single/:id" component={Single} />
          </Layout>
        </Router>
      </MuiThemeProvider>
    )
  }
}

export default App;
