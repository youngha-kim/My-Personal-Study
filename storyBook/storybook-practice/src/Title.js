import React from "react"

//title은 h1요소의 textContent, texColor은 글자색이 되는 props입니다.
const Title = ({title, textColor}) => (
    <h1 style ={{color: textColor}}>{title}</h1>
)

export default Title;