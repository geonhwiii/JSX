import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);
  const [email, setEmail] = useState('');
  const updateEmail = e => {
    const { target: { value } } = e;
    setEmail(value);
  }
  return (
    <>
      {count}
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <input type="text" onChange={updateEmail} placeholder="email" value={email}/>
    </>
  );
}


export default App;
