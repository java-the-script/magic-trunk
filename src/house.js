import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class House extends Component {
  render() {
    return (
      <div>
        <h1>House Portion</h1>
        <Link to="/trunk">Back</Link>
      </div>
    )
  }
}

export default House;