import React from 'react';
import { Board } from './Board';
import './App.css';
import styled from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Intro from './pages/Intro';
import CollectInformation from './pages/CollectInformation'
import SelectGame from './pages/SelectGame';
import ChartContainer from './Chart /ChartContainer';





const App = () => {
  let BoardArr = []

  const makeBoardArr = (arr) => {
    for(let i = 0 ; i < 225 ; i++){
      arr.push(i)
    }
    return arr 
  }

  makeBoardArr(BoardArr);
  

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
            <Board BoardArr={BoardArr}/>
        </div>
        <ChartContainer/>
      </div>
      </BrowserRouter>
    </>
   
  );
};
export default App;