import React, {useState, useRef} from 'react';
import './App.css';

//state가 변경될 때마다 컴포넌트가 리랜더링 됨.
const App2 = () => {
const [renderer , setRenderer] = useState(0);

const countRef = useRef(0);
let countVar = 0 ;

const increaseVar = () => {
    countVar = countVar + 1

}

const increaseRef = () => {
    countRef.current = countRef.current + 1;
 
}

const doRenderer = () => {
  setRenderer(renderer + 1);
}


const printResult = () => {
    console.log(`ref : ${countRef.current} / var: ${countVar}`  )
}

  return (
    <div>
      <p>var: {countVar} </p>
      <p>Ref: {countRef.current}</p>
      <button onClick={increaseVar}>Var올려</button>
      <button onClick={increaseRef}>ref올려</button>
      <button onClick={doRenderer}>랜더링!</button>
      <button onClick={printResult}>결과 출력</button>
    
        <br></br>
        ref값은 마운트가 시작할 때부터, 마운트가 해제될때까지 
        값이 저장되어 랜더링시 값을 유지하지만, var에 저장된 값은,
        랜더링될 때마다 값이 초기회됨을 알 수 있다.
    </div>


  );
};

export default App2;
