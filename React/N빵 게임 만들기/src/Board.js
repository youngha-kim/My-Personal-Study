
// import styled from 'styled-components';
import {useState} from 'react'
import './App.css';
import {Square} from './Square'
import {Link} from 'react-router-dom'

export const Board = ({BoardArr}) => {
    const [isField, setIsField] = useState(false)

    return( 
        <>
        {BoardArr.map(el => 
            <div key = {el}>
                <Square setIsField = {setIsField} isField = {isField}/>
            </div>
        )}
            <div>
            <Link to = "/">'X'</Link>
            </div>
        </>
    )
};
