import React, { useState, use } from 'react';

const Gugudan = () => {
  const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
  const [result, setResult] = useState('');
  const [value, setValue] = useState('');

  const handleChange = e => setValue(e.target.value)
  const handleSubmit = e => {
    e.preventDefault();
    if (+value === first * second ) {
      setResult('정답 : ' + value);
      setValue('');
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
    } else {
      setResult('땡!');
      setValue('')
    }
  }
  return (
      <div>
        <div>{first} 곱하기 {second} 는 ?</div>
        <form onSubmit={handleSubmit}>
          <input value={value} onChange={handleChange}/>
          <div>입력 : {value}</div>
          <div>결과 : {result}</div>
        </form>
      </div>
  );
}

export default Gugudan;