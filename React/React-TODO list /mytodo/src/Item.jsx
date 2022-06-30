import React from 'react'

const Item = ({todo}) => {
 const toggleItem = () => {
    
 }
 return (
    <li  onClick={toggleItem}>
        {todo}
    </li>
 )
}

export default Item