import React, { Component } from 'react';
import './WordRelay.css';

class WordRelay extends Component {
  state = {
    word: '훈민정음',
    result: '',
    value: ''
  }

  handleSubmit = e => {
    e.preventDefault();
    const { word, value } = this.state;
    if (word[word.length - 1] === value[0]) {
      this.setState({
        result: '정답입니다!',
        word: value,
        value: value[value.length - 1]
      });
    } else {
      this.setState({
        result: '땡',
        value: ''
      })
    }
  }

  handleChange = e => {
    this.setState({
      value: e.target.value,
    })
  }

  render() {
    const { word, result, value } = this.state;
    return (
      <div>
        <div>단어 : {word}</div>
        <form onSubmit={this.handleSubmit}>
          <input value={value} onChange={this.handleChange}/>
          <span> >>> {value}</span>
          <div>결과 : {result}</div>
        </form>
      </div>
    );
  }
}

export default WordRelay;