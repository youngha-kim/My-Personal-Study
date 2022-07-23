import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom"
import { useState } from "react";

export const ModalBackGround = styled.div`
 // TODO : Modal이 떴을 때의 배경을 깔아주는 CSS를 구현합니다.
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: gray;
  align-items: center;
  position : absolute;
  height: 50%;
  width: 50%;
  border: black solid ;
  /* opacity: 0.5; */
  border-radius: 5%;
  
`;

export const ModalView = styled.div.attrs(props => ({
    // attrs 메소드를 이용해서 아래와 같이 div 엘리먼트에 속성을 추가할 수 있습니다.
    role: 'dialog'
  }))`
  // TODO : Modal창 CSS를 구현합니다.
    border: solid black;
    border-radius: 5%;
  `;



const ModalBackdrop = ({openModalHandler, popCount, interest, total}) => {
    return(
        <ModalBackGround>
            
            <ModalView > 
            <li>
                <span> `N빵 금액은 
                    {parseInt(total / popCount) }
                    원 씩입니다.`
                </span>
                </li>
            <li>
                <span>`진 사람은   
                {(((total - interest) / popCount)+interest) }
                원입니다.`
                 </span>
            </li>
            </ModalView>
            <button onClick={openModalHandler}>취소</button>
            <Link to = "/selectGame">
                <button> 시작하기 !</button>
            </Link>
        </ModalBackGround>
    )
}

export default ModalBackdrop

