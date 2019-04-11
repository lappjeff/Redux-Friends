import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import { Login, FriendsList } from './views'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={ FriendsList } />
        <Route path='/login' component={ Login } />
      </div>
    );
  }
}

export default App;
