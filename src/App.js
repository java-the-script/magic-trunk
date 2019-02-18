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

const routes = [
  {
    path: "/trunk",
    component: Trunk,
  },
  {
    path: "/trunk/books",
    component: Books,
  },
  {
    path: "/trunk/equipment",
    component: Equipment,
  },
  {
    path: "/trunk/magical-beasts",
    component: MagicalBeasts,
  },
  {
    path: "/trunk/potions",
    component: Potions,
  },
];

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
          <Route path="/" exact component={Home} />
          {routes.map((route) => {
            console.log('LOGGING OUT ROUTE', route);
            return <Route path={route.path} exact component={route.component} />
          })}
        </div>
      </Router>
    );
  }
}

export default App;
