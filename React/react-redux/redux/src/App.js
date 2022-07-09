import React from 'react'
import { useSelector , useDispatch } from 'react-redux';
import './style.css';
import {actionPlus, actionMinus} from './index.js'

export default function App(){
  const state = useSelector((state) => {return state})
  // reducer의  
  const dispatch = useDispatch();

  const handlePlus = () => {
    dispatch(actionPlus());
  }

  const handleMinus = () => {
    dispatch(actionMinus()); //dispatch 에는 객체가 들어간다. 
  }


  return (
    <div>
      <h1>{`Count: ${state}`}</h1>
      <button onClick={handlePlus}></button>
      <button onClick={handleMinus}></button>
    </div>
  )
}