import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
    //My attempt (longer than necessary)
    // this.add1 = this.add1.bind(this);
    // this.add2 = this.add2.bind(this);
    // this.add3 = this.add3.bind(this);
    this.increment = this.increment.bind(this); //instructor's suggestion
    this.reset = this.reset.bind(this);
  }

  //My attempt (longer than necessary)
  // add1(){
  //   this.setState({count: this.state.count + 1});
  // }
  // add2(){
  //   this.setState({count: this.state.count + 2});
  // }
  // add3(){
  //   this.setState({count: this.state.count + 3});
  // }
  
  increment(value){
    this.setState({count: this.state.count + value}); //instructor's suggestion
  }
  reset(){
    this.setState({count: 0});
  }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        {/* this is my first attempt */
        /* <button onClick={this.add1}>1</button>
        <button onClick={this.add2}>2</button>
        <button onClick={this.add3}>3</button> */}
        {/* instructor's suggestion below */}
        <button onClick={() => this.increment(1)}>1</button>
        <button onClick={() => this.increment(2)}>2</button>
        <button onClick={() => this.increment(3)}>3</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default App;
