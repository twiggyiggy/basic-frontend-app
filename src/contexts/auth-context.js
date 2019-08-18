import React, { Component } from 'react';
import authService from '../services/auth-service.js';

export const AuthContext = React.createContext();

class AuthProvider extends Component {
  state = {
    isLoggedIn: false,
    user: {},
    isLoading: true,
  }

  signup = (user) => {
    return authService.signup(user)
    .then((user) => {
      this.setState({
        isLoggedIn: true,
        user
      })
    })
  }

  login = (user) => {
    return authService.login(user)
    .then((user) => {
      this.setState({
        isLoggedIn: true,
        user
      })
    }) 
  }

  logout = () => {
    return authService.logout()
    .then(() => {
      this.setState({
        isLoggedIn: false,
        user: {}
      })
    })
  }

  componentDidMount() {
    authService.getCurrentUser()
    .then(user => {
      this.setState({
        user,
        isLoggedIn: true,
        isLoading: false,
      })
    })
    .catch(() => {
      this.setState({
        isLoggedIn: false,
        user: {},
        isLoading: false,
      })
    })
  }

  render() {
    const {user, isLoggedIn, isLoading} = this.state;
    return (
      <>
        {isLoading ? <p>Loading...</p> : (
            <AuthContext.Provider value={ 
              {
                user,
                isLoggedIn,
                login: this.login,
                signup: this.signup,
                logout: this.logout
              }
            }>
              {this.props.children}
            </AuthContext.Provider>
          )}
      </>
    );
  }
}

export default AuthProvider;
