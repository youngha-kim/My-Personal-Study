import React from 'react'
import Item from './Item.jsx'
const List = ({todos, loading}) => {


    let todoList = <div>loading....</div>;
    if(!loading) todoList = todos.map(todo => <Item key={Math.random()} todo = {todo} />)
    
    
    return (
        <ul>
           {todoList}
        </ul>
    )
}

export default List