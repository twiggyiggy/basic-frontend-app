import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import withAuth from '../components/withAuth.js';

class Signup extends Component {

  state = {
    username: '',
    email: '',
    password: '',
    redirect: false,
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const {username, email, password} = this.state

    this.props.signup({ username, email, password })
      .then( (user) => {
        // console.log(this.props)
        // if (this.props.redirect === true) {
        //   return (
        //     <Redirect to='/login' />
        //   )
        // }
        // console.log(user)
        this.setState({
            // username: '',
            // email: '',
            // password: '',
            redirect: true,
        });
      })
      .catch( error => console.log(error) )
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render() {
    const { username, password, email, redirect} = this.state;
    if (redirect) {
      return <Redirect to='/login' />
    } else {
      return (
      <>
        <form onSubmit={this.handleFormSubmit} className="auth-form">
          <header>
            <h1>Bozo</h1>
          </header>
          <label htmlFor='username'>Username:</label>
          <input id='username' type='text' name='username' value={username} onChange={this.handleChange}/>
          <label htmlFor='email'>Email:</label>
          <input id='email' type='email' name = 'email' value = {email} onChange={this.handleChange}/>
          <label htmlFor='password'>Password:</label>
          <input id='password' type='password' name='password' value={password} onChange={this.handleChange} />
          <input type='submit' value='Signup' />
        </form>

        <p>Already have account? 
          <Link to={'/login'}> Login</Link>
        </p>

      </>
    )
  }
  }
}

export default withAuth(Signup);