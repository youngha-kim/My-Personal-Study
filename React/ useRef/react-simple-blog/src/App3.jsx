import { render } from '@testing-library/react';
import React, {useState, useRef, useEffect} from 'react';
import './App.css';

const App3 = () => {
  const [count , setCount] = useState(1);
  const renderCount = useRef(1);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
    console.log('랜더링 수:', renderCount.current)
  });

  return (
    <div>
      <p>Count : {count}</p>
      <button onClick={() => setCount(count +1)}>출력</button>

      <br></br>
      랜더링한 수를 알고자 할 때, useRef는 랜더링을 시키지 않기 때문에 
      무한루프에 빠지지 않음. 
    
    
    </div>

    
  );
};

export default App3;
