import React, { useEffect, useState } from 'react';
import './App.css';
import List from './List.jsx';
import useFetch from './useFetch';
import Header from './Header';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState();
//사이드 이펙트 부분을 따로 가져와서 처리하자 

  const loading = useFetch(setTodos,'http://localhost:3001/');

  // input태그의 정보가 이벤트 메소드를 통해서, 상태변경함수 setNewTODO에 들어가,
  // 상태변수 newTodo의 상태를 바꿔준다. 
  const changeInputData = (e) => {
    setNewTodo(e.target.value);
  }

  const addTodo = (e) => {
    //기본값을 보호하여 폼 전송을 막음.
    e.preventDefault();

    //결국 fliter나 map을 사용하여 랜더링하기 때문에, 
    // 배열을 늘려가며 그 배열 자체를 랜더링 시키는 방법으로 
    // todo 리스트를 구현한다.
    setTodos([...todos, newTodo]);
  }
 

 //사이드 이펙트에 관련한 처리를 담당하는 hook 
  //fetching 또는 logging 을 이용할 때 많이 사용하니, 그 부분 염두해두기
  useEffect( () => {
    console.log("새로운 배열입력이 입력되었습니다.", todos)
   },[todos])
  
 

  return (
    <>
    <h1> todo application </h1>
    <Header todos = {todos}/>
    <form action="">
      <input type="text" name ="" onChange={changeInputData}/>
      <button onClick={addTodo}>할일 추가</button>
    </form>
    <List todos = {todos} loading = {loading}/>
    </>
  )

}
export default App;
