import React, { Component } from 'react';
import './App.css';
import AsyncDemo from './AsyncDemo';
import ErrorDemo from './ErrorDemo';

class App extends Component {
  render() {
    return (
      <div>
        <ErrorDemo />
        <AsyncDemo />
      </div>
    );
  }
}

export default App;
