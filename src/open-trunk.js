import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class OpenTrunk extends Component {
  render() {
    return (
      <div>
        <h1>THIS IS THE OPEN TRUNK!</h1>
        <Link to="open-trunk/books">Books</Link>
        <Link to="open-trunk/equipment">Equipment</Link>
        <Link to="open-trunk/magical-beasts">Magical Beasts</Link>
        <Link to="open-trunk/potions">Potions</Link>
      </div>
    )
  }
}

export default OpenTrunk;