import React, { Component } from 'react';
import './App.css';
import NewTask from './Components/NewTask'
import ToDo from './Components/ToDo'
import List from './Components/List'

class App extends Component {
  render() {
    let variable = <ToDo />
    
    return (
      <div className="App">
        <h1>My to-do List:</h1>
        <NewTask />
        <List />
      </div>
    );
  }
}

export default App;
