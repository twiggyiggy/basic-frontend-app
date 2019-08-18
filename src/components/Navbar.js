import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withAuth from './withAuth.js';

class Navbar extends Component {
  render() {  
    return (
          <nav>
            <ul>
              <li>
                <Link to='/setup'>New Session</Link>
              </li>
              <li>
                <Link to='/gallery'>Gallery</Link>
              </li>
              <li onClick={this.props.logout}>
                 Logout
              </li>
            </ul>
          </nav>
    )
  }
}

export default withAuth(Navbar);