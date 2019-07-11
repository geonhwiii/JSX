import React, { useState } from 'react';

const ExUseState = () => {
  const [item, setItem] = useState(1);
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);
  return (
    <>
      <h1>카운트 : {item}</h1>
      <button onClick={incrementItem}>+</button>
      <button onClick={decrementItem}>-</button>
    </>
  )


}

export default ExUseState;