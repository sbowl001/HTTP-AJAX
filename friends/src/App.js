import React, { Component } from 'react';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddFriend />
        <FriendsList /> 
      </div>
    );
  }
}

export default App;

//SOLID
//Single Reponsibility Principle 
//Open/Close 
// Liskov substitution 
//Interface segregation
//Dependency inversion 

//Dry = Don't repeat yourself
