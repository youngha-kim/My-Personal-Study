import React from "react"
import { w3cwebsocket as W3CWebSocket } from 'websocket';
import { useEffect } from "react";



const App = () => {
  const client = new W3CWebSocket('ws://192.168.0.67:8000/')

  useEffect = (() => {
    client.onopen = () => {
      console.log('webSocket Client connected');
    }
  },[])




  return(
    <>
    gdgd
    </>
  )
}

export default App;