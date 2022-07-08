import App from './App.js'
import { createRoot } from 'react-dom/client'
import {legacy_createStore  as creatStore } from 'redux';
import {Provider} from 'react-redux'

const rootElement  = document.getElementById('root');
const root = createRoot(rootElement);
const INCREASE = "increase"
const DECREASE = "decrease"

export  const actionPlus = () => {
  return {
    type: INCREASE,
  }
}

export const actionMinus = () => {
  return {
    type: DECREASE,
  }
}



const reducer = (state = 1  , action ) => {
  let newState = state;
  switch(action.type) {
    case INCREASE:
      return ++newState;

    case DECREASE :
      return --newState;

    default:
      return state
  }
}
const store = creatStore(reducer) // reducer을 store로 지정한다. 
root.render(
  <Provider store = {store}>
      <App />
  </Provider>

);
