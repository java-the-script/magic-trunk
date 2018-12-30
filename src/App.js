import React, { Component } from 'react';
import './App.css';
import { 
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import OpenTrunk from "./openTrunk";
import Equipment from './equipment';
import House from './house';

class ClosedTrunk extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Magic Trunk</h1>
          <Link to="/openTrunk">Open The Trunk</Link>
        </header>
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
          <Route path="/openTrunk/equipment" exact component={Equipment}></Route>
          <Route path="/openTrunk/house" exact component={House}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
