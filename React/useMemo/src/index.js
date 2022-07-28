import React from "react";
import ReactDOM from "react-dom/client"
import EX1 from "./UseMemoEx1"
import styled from 'styled-components'
import EX2 from "./UseMemoEx2"
import EX3 from "./UseMemoEx3"

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
        < EX3 />
        </div>
    </Exstyle>
);