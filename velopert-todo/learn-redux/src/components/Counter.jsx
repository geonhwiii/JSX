import React from 'react';
import './Counter.css';

export const Counter = ({ value, color, onIncrement, onDecrement }) => {
  return (
    <div className="Counter">
      <h1 style={{color}}>{value}</h1>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </div>
  )
}

