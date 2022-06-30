import React, {useState, useRef} from 'react';
import './App.css';

//state가 변경될 때마다 컴포넌트가 리랜더링 됨.
const App = () => {
  const [count, setCount] = useState(0);
  
  const countRef = useRef(0);

  console.log(countRef) //current를 키값으로 가진 객체형태이기 countRef.current로 접근 가능


  const increaseCountState = () => {
    setCount(count + 1);
  }

 const increaseCountRef = ()=> {
  countRef.current = countRef.current + 1 
  console.log('ref:',countRef.current)
 };

  ;
  return (
    <div>
      <p>State: {count} </p>
      <p>Ref : {countRef.current}</p>
      <button onClick = {increaseCountState}>State 출력</button>
      <button onClick = {increaseCountRef}>Ref 올려</button>
      
      <br></br>
      
      ref 버튼을 아무리 클릭해도 카운트가 올라가지 않는 것 처럼 보인다. 
      사실은 버튼을 누를 때마다 countRef.current 값이 올라가고 있지만, useRef함수는 랜더링을 시키지 않기 때문에,
      랜더링을 시켜주면 그제서야 증가한 값이 보이게 된다.

      <br></br>
      엄청 자주 바뀌는 값을 담을 때 useref 유용하다.
    </div>
  );
};

export default App;
