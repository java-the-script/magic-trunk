import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MagicalBeasts extends Component {
  render() {
    return (
      <div>
        <h1>This is the Magical Beasts Section!</h1>
        <Link to="/trunk">Back</Link>
      </div>
    )
  }
}

export default MagicalBeasts;