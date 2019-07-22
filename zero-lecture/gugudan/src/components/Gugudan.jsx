import React, { Component } from 'react';

class Gugudan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: Math.ceil(Math.random() * 9),
      second: Math.ceil(Math.random() * 9),
      result: '',
      value: '',
    }
  }

  handleChange = e => {
    this.setState({
      value: e.target.value,
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    const { first, second, value } = this.state;
    if (+value === first * second ) {
      this.setState({
        result: '정답 : ' + value,
        value: '',
        first: Math.ceil(Math.random() * 9),
        second: Math.ceil(Math.random() * 9),
      })
    } else {
      this.setState({
        result: '땡',
        value: '',
      })
    }
  }

  render() {
    const { first, second, result, value } = this.state;
    return (
      <>
        <div>{first} 곱하기 {second} 는 ?</div>
        <form onSubmit={this.handleSubmit}>
          <input value={value} onChange={this.handleChange}/>
          <div>입력 : {value}</div>
          <div>결과 : {result}</div>
        </form>
      </>
    );
  }
}

export default Gugudan;