import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <h1>React router</h1>
            <Route path='/:filter?' render={({match}) => (
              <h2>{match.params.filter}</h2>
            )} />
            <Footer/>
          </div>
        </Router>
      </div>
    )
  }
}

export default App;
