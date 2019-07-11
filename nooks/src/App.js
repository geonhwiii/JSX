import React from 'react';
import './App.css';
import { useInput } from './components/useInput';

const App = () => {
  const maxLen = value => !value.includes('@');
  const name = useInput("Mr.", maxLen)
  return (
    <>
      <h1>Hello</h1>
      <input type="text" placeholder="Name" {...name}/>
    </>
  );
}

export default App;
