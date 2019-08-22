import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withAuth from './withAuth.js';
import NewSessionIcon from '../icons/session-icon.png'
import GalleryIcon from '../icons/gallery-icon.png'
import LogoutIcon from '../icons/logout-icon.png'

class Navbar extends Component {
  render() {  
    return (
          <nav>
            <ul>
              <li>
                <Link to='/setup'><img src={NewSessionIcon} alt=""/></Link>
              </li>
              <li>
                <Link to='/gallery'><img src={GalleryIcon} alt=""/></Link>
              </li>
              <li onClick={this.props.logout}>
                <img src={LogoutIcon} alt=""/>
              </li>
            </ul>
          </nav>
    )
  }
}

export default withAuth(Navbar);