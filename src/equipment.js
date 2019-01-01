import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Equipment extends Component {
  render() {
    return (
      <div>
        <h1>Equipment Portion</h1>
        <Link to="/openTrunk">Back</Link>
      </div>
    )
  }
}

export default Equipment;