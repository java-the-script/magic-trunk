import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Books extends Component {
  render() {
    return(
      <div>
        <h1>This is the Books Section!</h1>
        <Link to="/openTrunk">Back</Link>
      </div>
    )
  }
}

export default Books;