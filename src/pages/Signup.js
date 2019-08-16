import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withAuth from '../components/withAuth.js';

class Signup extends Component {

  state = {
    username: '',
    email: '',
    password: '',
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const {username, email, password} = this.state

    this.props.signup({ username, email, password })
      .then( (user) => {
        console.log(user)
        this.setState({
            username: '',
            email: '',
            password: '',
        });
      })
      .catch( error => console.log(error) )
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render() {
    const { username, password, email } = this.state;
    return (
      <>
        <form onSubmit={this.handleFormSubmit}>
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

export default withAuth(Signup);