import React from 'react';
import { Board } from './Board';
import './App.css';
import styled from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Intro from './pages/Intro';
import CollectInformation from './pages/CollectInformation'
import SelectGame from './pages/SelectGame';
import ChartContainer from './Chart /ChartContainer';


export const CssContainer = styled.div`
// TODO : Modal을 구현하는데 전체적으로 필요한 CSS를 구현합니다.
    display: flex;
    flex-direction: row;
    flex-wrap : wrap;
    border: solid black;
    width: 100px;
    height:100px;
`;


const App = () => {
  let BoardArr = [0,1,2,3,4,5,6,7,8]

  return (
    <>
    <BrowserRouter>

      <div id='container'>
        <div id='title'>React Custom Component</div>
        <div className='box'>
        <Routes>
          <Route path = "/" element = {<Intro/>}/>
          <Route path = "/collect" element = {<CollectInformation/>}/>
          <Route path = "/selectGame" element = {<SelectGame/>}/>
        </Routes>
        <CssContainer>
          <div className='sub'></div>
            <Board BoardArr={BoardArr}/>
        </CssContainer>

        </div>
        <ChartContainer></ChartContainer>
      </div>
      </BrowserRouter>
    </>
   
  );
};
export default App;