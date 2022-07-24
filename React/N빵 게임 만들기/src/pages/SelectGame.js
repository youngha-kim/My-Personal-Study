import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom'

export const SectionStyle = styled.section`
    display: block;
    border: solid;
    height: 760px;
`;

export const HeadStyle = styled.h1`
    display: block;
    border: solid;
    margin: 100px;
    text-align: center;
    font-size: 40px;
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
        list-style: none;
    };
    div :first-child{
        margin-top: 10vh;
    }
    div :last-child{
        margin-bottom: 10vh;
    }
`;

const SelectGame = () => {
    return(
        <SectionStyle>
        <section>
            <HeadStyle>
                <h1> N빵 게임 ! </h1>
            </HeadStyle>
            <main>
                <DivStyle>
                <div className="expressionContainer">
                        <li>오목</li>
                        <li>테트리스</li>
                        <li>지렁이 게임</li>
                        <li>사다리 타기</li>
                </div>
                </DivStyle>
            </main>
        </section>
        </SectionStyle>
    )
}


export default SelectGame