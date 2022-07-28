import { useEffect, useState, useCallback } from "react"

import React from 'react';

const CallbackEX1 = () => {
  const [number, setNumber] = useState(0);
  const [toggle, setToggle] = useState(true);
//원본함수 
//   const someFunction = () => {
//     console.log(`someFunc: number: ${number}`);
//     return ; 
//   };

const someFunction = useCallback(() => {
    console.log(`someFunc: number: ${number}`);
    return ; 
},[number]);


  useEffect(()=>{
    console.log('somefunction이 변경되었습니다.')
  }, [someFunction]);
  //useEffect를 사용하면, someFunction은 함수 객체이기 때문에, 재선언될 때마다 다른 주소를 참조하기 때문에,
  //someFunction이 갱신되었다고 인식하여 매번, console.log 출력한다. 
  // 정확히 말하자면 someFunction 의 주솟값을 비교하게 되는데, 주소값이 매번달라진다.

  return (
    <div>
        <input
        type = 'number'
        value = {number}
        onChange={(e) => setNumber(e.target.value)}
        />
        <button onClick={() => setToggle(!toggle)}>{toggle.toString()}</button>
        <br/>
        <button onClick = {someFunction}> Call someFunction </button>
    </div>
  );


}

export default CallbackEX1;