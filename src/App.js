import React, { Component } from 'react';
import './App.css';
import { 
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Trunk from "./trunk";
import Books from "./books";
import Equipment from './equipment';
import MagicalBeasts from './magical-beasts';
import Potions from './potions';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Magic Trunk</h1>
          <Link to="/trunk">Open The Trunk</Link>
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
          <Route path="/" exact component={Home}></Route>
          <Route path="/trunk" exact component={Trunk}></Route>
          <Route path="/trunk/books" exact component={Books}></Route>
          <Route path="/trunk/equipment" exact component={Equipment}></Route>
          <Route path="/trunk/magical-beasts" exact component={MagicalBeasts}></Route>
          <Route path="/trunk/potions" exact component={Potions}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
