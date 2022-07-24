
import styled from 'styled-components';
import {useState} from 'react'
import './App.css';
import {Square} from './Square'
import {Link} from 'react-router-dom'

const CssContainer = styled.div`
// TODO : Modal을 구현하는데 전체적으로 필요한 CSS를 구현합니다.
.fieldRow{
    display: flex;
    flex-direction: row;
    flex-wrap : wrap;
    border: solid black;
    width: 500px;
    height: 500px;
}
`;

export const Board = ({BoardArr}) => {
    const [isField, setIsField] = useState(false)

    return( 
        <>
        <CssContainer>
         <div>NEXT : {isField ? 'O' : 'X' }</div>
         <div className='fieldRow'>
            {BoardArr.map(el => 
                <div key = {el}>
                    <Square 
                    setIsField = {setIsField} 
                    isField = {isField}
                    el = {el}/>
                </div>
            )}
        </div>
      
            <div>
            <Link to = "/">'X'</Link>
            </div>
            
        </CssContainer>
        </>
    )
};
