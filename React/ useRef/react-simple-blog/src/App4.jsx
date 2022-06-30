import { render } from '@testing-library/react';
import React, {useState, useRef, useEffect} from 'react';
import './App.css';

const App4 = () => {
  const inputRef = useRef('hi');

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const login = () => {
    alert(`환영합니다 ${inputRef.current.value}!`)
    inputRef.current.focus();
 
  }

  return (
    <div>
      <input ref={inputRef} type="text" placeholder='usename' />
      <button onClick={login}>로그인 </button>
    <br />
      inputRef.current 안에 input이 들어간다. 
    </div>
  );
};

export default App4;
