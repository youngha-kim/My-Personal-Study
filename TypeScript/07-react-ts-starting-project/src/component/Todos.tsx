import React from 'react'
import Todo from '../models/todo';
import One from './One';

const  Todos: React.FC<{items: Todo[]}>= (props) =>  {
  return (
    <ul>
      {props.items.map((item)=><One key = {item.id} text= {item.text}/> )}
    </ul>
  );
}
export default Todos;
