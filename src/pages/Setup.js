import React, { Component } from 'react'
import withAuth from '../components/withAuth.js';
import Navbar from '../components/Navbar.js';

class Setup extends Component {

  

  render() {
    return (
      <div>
        <h1>Welcome {this.props.user.username}</h1>
        <Navbar />
      </div>
    )
  }
}

export default withAuth(Setup);