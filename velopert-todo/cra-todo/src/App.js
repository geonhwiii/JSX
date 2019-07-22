import React, { Component } from 'react';
import MyName from './components/MyName';
import Counter from './components/Counter';
import  './App.css';
import ScrollBox from './components/ScrollBox';

class App extends Component {
  
  render() {
    
    return (
      <div className="App">
        <MyName name="소희"/>
        <Counter />
        <ScrollBox />
      </div>
    );
  }
}

export default App;