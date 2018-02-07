import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      value: 0
    }
    this.add1 = this.add1.bind(this);
    this.add2 = this.add2.bind(this);
    this.add3 = this.add3.bind(this);
    // this.handleValueChange = this.handleValueChange.bind(this);
    this.reset = this.reset.bind(this);
  }
  add1(){
    this.setState({count: this.state.count + 1});
  }
  add2(){
    this.setState({count: this.state.count + 2});
  }
  add3(){
    this.setState({count: this.state.count + 3});
  }
  handleValueChange(e){
    this.setState({value: +e.target.value})
  }
  reset(){
    this.setState({count: 0})
  }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.add1}>1</button>
        <button onClick={this.add2}>2</button>
        <button onClick={this.add3}>3</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default App;
