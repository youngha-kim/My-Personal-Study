import React from "react";
import styled from "styled-components";
import { useState } from "react";
import ModalBackdrop from "./ModalBackDrop";

export const SectionStyle = styled.section`
    display: block;
    border: solid;
    height: 760px;
`;

export const HeadStyle = styled.h1`
    display: block;
    border: solid;
    text-align: center;
    font-size: 40px;
    margin-top: 0;
    margin-left: 10vw;
    margin-right: 10vw;
`;

export const DivStyle = styled.div`
    display: flex;
    border: solid;
    flex-direction: column;
    align-items: center;
    margin-left: 10vw;
    margin-right: 10vw;
    margin-bottom: 100px;
    li{
        font-size: 35px;
    };
    .QueryContainer :first-child{
        margin-top: 10vh;
    }
    .QueryContainer :last-child{
        margin-bottom: 10vh;
    }
`;


const Intro = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [total, setTotal] = useState(0);
    const [popCount, setPopCount] = useState(0);
    const [interest, setInterest] = useState(0);
   
    const fn_onlyNum = (num) => {
        //숫자만 들어가는 로직
        let regExp = /^[0-9]*$/;
        if(!regExp.test(num)){
          return false;
        }
        return true;
      }

    const openModalHandler = () =>{
        //모달 팝업을 엽니다
        setIsOpen(!isOpen) 
    }

    const totalHandler = (event) => {
        let getNumber = event.target.value;
        if(!fn_onlyNum(getNumber)){
            alert('숫자만 입력해주세요') ;
            event.target.value = ""
        }else{
            setTotal(Number(getNumber))
        }
        
    }
    const popCountHandler = (event) => {
        console.log(event.target.value)
        let getNumber = event.target.value;
        if(!fn_onlyNum(getNumber)){
            alert('숫자만 입력해주세요') ;
            event.target.value = ""
        }else{
            setPopCount(Number(getNumber))
        }
    }
    const interestHandler = (event) => {
        let getNumber = event.target.value;
        if(!fn_onlyNum(getNumber)){
            alert('숫자만 입력해주세요') ;
            event.target.value = ""
        }else{
            setInterest(Number(getNumber))
        }
    }

    return(
        <SectionStyle>
        <section>
            <HeadStyle>
                <h1> N빵 게임 ! </h1>
            </HeadStyle>
            <main>
                <DivStyle>
                <div className="QueryContainer">
                    <li>
                        <span>계산할 금액을 입력해 주세요.</span>
                        <input onChange={ e => totalHandler(e)}></input>
                        원
                    </li>
                    <li>
                        <span>몇 명이서 오셨나요?</span>
                        <input onChange={ e => popCountHandler(e)}></input>
                        명
                    </li>
                    <li>
                        <span>잔돈 단위를 선택해 주세요.</span>
                        <input onChange={ e => interestHandler(e)}></input>
                        원
                    </li>
                </div>
                <button onClick={openModalHandler}> 확인 
                </button>
                    {isOpen ? <ModalBackdrop 
                    openModalHandler = {openModalHandler}
                    total = {total}
                    popCount= {popCount}
                    interest= {interest}
                    /> : null}
                </DivStyle>
            </main>
        </section>
        </SectionStyle>
    )
}


export default Intro