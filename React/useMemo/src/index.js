import React from "react";
import ReactDOM from "react-dom/client"
import EX1 from "./UseMemoEx1"
import styled from 'styled-components'

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
        < EX1 />
        </div>
    </Exstyle>
);