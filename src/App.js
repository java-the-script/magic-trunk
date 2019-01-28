import React, { Component } from 'react';
import './App.css';
import { 
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import OpenTrunk from "./open-trunk";
import Books from "./books";
import Equipment from './equipment';
import MagicalBeasts from './magical-beasts';
import Potions from './potions';

class ClosedTrunk extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Magic Trunk</h1>
          <Link to="/open-trunk">Open The Trunk</Link>
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
          <Route path="/open-trunk" exact component={OpenTrunk}></Route>
          <Route path="/open-trunk/books" exact component={Books}></Route>
          <Route path="/open-trunk/equipment" exact component={Equipment}></Route>
          <Route path="/open-trunk/magical-beasts" exact component={MagicalBeasts}></Route>
          <Route path="/open-trunk/potions" exact component={Potions}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
