import React, { Component } from 'react'
import {Link} from 'react-router-dom';
// import milligram from 'milligram'

export default class Home extends Component {
  

  render() {
    return (
      <div className="home-container">
        <h1>Bozo</h1>
        <section>
          <Link to='/login'>
            <button>Log in</button>
          </Link>
          <Link to='/signup'>
          <button>Sign up</button>
          </Link>
        </section>
      </div>
    )
  }
}
