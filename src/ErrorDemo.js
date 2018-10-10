import React, { Component } from 'react';

export default class ErrorDemo extends Component {
  state = {
    max: null,
    message: null
  }
  
    doTheActualCalculationThough = arr => {
        if (!arr.length) {
            throw new Error('No values to calculate');
        }
        
    }

  calculateMax = arr => {
      return this.doTheActualCalculationThough(arr);
  }

  doThing = () => {
    // you can place the error message here or in the try
    //   this.setState({ message: null });
    const arr = [];
    try {
        const max = this.calculateMax(arr);
        this.setState({ message: null, max });
    } catch (error) {
        this.setState({ message: "You didn't supply any values"})
    }
  }
  
  render() {
    const { max, message } = this.state;
    
    return (
      <div>
        <h1>Error Demo</h1>
        <h2>Max: {max}</h2>
        <div><button onClick={this.doThing}>Do thing</button></div>
        <div>{message}</div>
      </div>  
    );
  }
}