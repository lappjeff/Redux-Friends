import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import { Login, FriendsList, Home } from './views'

import PrivateRoute from './components/PrivateRoute'

class App extends Component {
  render() {
    return (
      <div className="App">
        <PrivateRoute path='/friendsList' component={ FriendsList } />
        <Route path='/login' component={ Login } />
        <Route exact path='/' component={ Home } />
      </div>
    );
  }
}

export default App;
