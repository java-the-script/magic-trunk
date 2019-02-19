import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Trunk extends Component {
  render() {
    return (
      <div>
        <h1>THIS IS THE OPEN TRUNK!</h1>
        <Link to="trunk/books">Books</Link>
        <Link to="trunk/equipment">Equipment</Link>
        <Link to="trunk/magical-beasts">Magical Beasts</Link>
        <Link to="trunk/potions">Potions</Link>
      </div>
    )
  }
}

export default Trunk;