import { useEffect, useState, useCallback } from "react"
import Box from './Box.js'
import React from 'react';

const CallbackEX2 = () => {
  const [size, setsizes] = useState(100);
  const [isDark, setisDark] = useState(false);

  const createBoxStyle = useCallback(() => {
    return {
      backgroundColor: 'pink',
      width: `${size}px`,
      height: `${size}px`,
    };
  }, [size]
  ) 

  return (
    <div style = {{
      background: isDark ? 'black' : "white",
    }}
    >
      <input
        type = "number"
        value={size}
        onChange = {(e)=> setsizes(e.target.value)}
      />
      <button onClick={() => setisDark(!isDark)}></button>
        <Box createBoxStyle = {createBoxStyle}></Box>
      
    </div>
  )

}

export default CallbackEX2;