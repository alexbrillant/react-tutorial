import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Footer extends Component {
  render() {
    return (
      <div>
        <Link to='/'>All</Link>
        <Link to='/active'>Active</Link>
        <Link to='/completed'>Completed</Link>
      </div>
    )
  }
}

export default Footer;