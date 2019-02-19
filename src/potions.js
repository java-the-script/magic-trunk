import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 

class Potions extends Component {
  render() {
    return (
      <div>
        <h1>This is the Potions Section!</h1>
        <Link to="/trunk">Back</Link>
      </div>
    )
  }
}

export default Potions