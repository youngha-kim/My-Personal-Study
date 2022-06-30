import React from "react";
import styled from "styled-components";

//props.color가 있으면 props.coloe을 , 그렇지 않으면 횐색을 배경색으로 사용한다

const StyledButton = styled.button`
    background: ${ (props) => props.color || "white"};
    width: ${ (props) => (props.size === "big" ? "200px" : "100px")};
    height: ${ (props) => (props.size === "big" ? "80px" : "40px")};
`


function Button({ color, size, text }) {
    return (

        <StyledButton color={color} size={size}>{text}</StyledButton>
    );
}

export default Button