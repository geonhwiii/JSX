import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0,
  }

  handleIncrease = () => {
    this.setState({ count: this.state.count + 1 })
  }

  handleDecrease = () => {
    this.setState({ count: this.state.count + 1 })
  }
  render() {
    return (
      <div>
        <h1>카운터</h1>
        <div>값 : {this.state.count}</div>
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
      </div>
    );
  }
}

export default Counter;