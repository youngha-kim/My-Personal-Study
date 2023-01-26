import React from 'react'
import { useMemo } from 'react'
import {useState} from 'react'
import {add} from './add'
import styled from 'styled-components'

export const StyledApp = styled.div`

.name-input {
    width: 500px;
    margin-bottom: 20px;
    padding: 12px 20px;
  }
  
  .value-input {
    width: 500px;
    margin-bottom: 20px;
    padding: 12px 20px;
  }
  
  input:hover {
    background-color: #45a049;
    opacity: 0.4;
  }`


const MemoEX1 = () => {
  const [name, setName] = useState("");
  const [val1, setVal1] = useState(0);
  const [val2, setVal2] = useState(0);

  const add = (num1, num2) => {
    console.log("숫자가 들어옵니다.");
    return Number(num1) + Number(num2);
  };

  const answer = useMemo(()=>{
    return add(val1, val2);
  }, [val1] )


    return (
      <StyledApp>
        <div>
      <input
        className="value-input"
        placeholder="숫자를 입력해주세요2"
        value={val1}
        type="number"
        onChange={(e) => setVal1(Number(e.target.value))}
      />
      <input
        className="value-input"
        placeholder="숫자를 입력해주세요"
        value={val2}
        type="number"
        onChange={(e) => setVal2(Number(e.target.value))}
      />
      <div>{answer}</div>
        </div>
        </StyledApp>
    )
}

export default MemoEX1