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



  const answer = useMemo(()=>{
    return add(val1, val2);
  }, [val1] )


    return (
      <StyledApp>
        <div>
        <input
        className="name-input"
        placeholder="이름을 입력해주세요"
        value={name}
        type="text"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="value-input"
        placeholder="숫자를 입력해주세요"
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