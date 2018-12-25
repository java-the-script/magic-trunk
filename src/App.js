import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { 
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class ClosedTrunk extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Magic Trunk</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <Link to="/openTrunk">Open The Trunk</Link>
        </header>
      </div>
    )
  }
}

class OpenTrunk extends Component {
  render() {
    return (
      <div>
        <h1>THIS IS THE OPEN TRUNK!</h1>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <Router>
        <div className="main-container">
          <Route path="/" exact component={ClosedTrunk}></Route>
          <Route path="/openTrunk" exact component={OpenTrunk}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
