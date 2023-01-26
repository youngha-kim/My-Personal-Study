import React from "react";
import ReactDOM from "react-dom/client"
import MemoEX1 from "./UseMemoEx1"
import styled from 'styled-components'
import MemoEX2 from "./UseMemoEx2"
import MemoEX3 from "./UseMemoEx3"
import CallbackEX1 from "./UseCallbackEx1";
import CallbackEX2 from "./UseCallbackEx2";
import MemoEx4 from "./UseMemoEx4.js";
export const Exstyle = styled.div`
.div {
    font-family: sans-serif;
    text-align: center;
  }
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Exstyle>
        <div>
            <MemoEx4/>
        </div>
    </Exstyle>
);