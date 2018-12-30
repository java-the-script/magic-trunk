import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class OpenTrunk extends Component {
  render() {
    return (
      <div>
        <h1>THIS IS THE OPEN TRUNK!</h1>
        <Link to="openTrunk/house">House History</Link>
        <Link to="openTrunk/equipment">Equipment</Link>
      </div>
    )
  }
}

export default OpenTrunk;