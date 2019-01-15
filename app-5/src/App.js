import React, { Component } from 'react';
import './App.css';
import Question5 from './Componets/Question5'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Question5 pictureUrl = {'https://pbs.twimg.com/profile_images/988775660163252226/XpgonN0X_400x400.jpg'}/>
      </div>
    );
  }
}

export default App;
