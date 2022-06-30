import React from "react";


const Header = ({todos}) => {
    return(
        <div>
            <h1>Hello Todo </h1>
            <div>해야할일 ! {todos.length} 개 해야댐</div>
        </div>
    )
}

export default Header