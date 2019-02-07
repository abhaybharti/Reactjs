import React, { Component } from 'react';
import './App.css';
import Counter from './container/Counter';

class App extends Component {
  render() {
    console.log("Inside App.js")
    return (
      <div className="App">
        <Counter />
      </div>
    );
  }
}

export default App;