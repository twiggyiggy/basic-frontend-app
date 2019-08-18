import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Navbar from './components/Navbar.js';
import PrivateRoute from './components/PrivateRoute.js';
import AnonRoute from './components/AnonRoute.js';

import Private from './pages/Setup';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

import AuthProvider from './contexts/auth-context.js';

import './App.css';
import 'milligram';

class App extends Component {
  render() {
    return (
      <Router>
        <AuthProvider>
          <div className="container">
            <Switch>
              <AnonRoute path='/' exact component={Home} /> 
              <AnonRoute path='/signup' exact component={Signup} />
              <AnonRoute path='/login' exact component={Login} />
              <PrivateRoute path='/setup' exact component={Setup} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </AuthProvider>
      </Router>
    )
  }
}

export default App;
