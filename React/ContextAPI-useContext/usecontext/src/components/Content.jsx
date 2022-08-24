import React, { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';

const Content = () => {
    const {isDark} = useContext(ThemeContext)
    return(
        <div
            className='content'
            style={{
                backgroundColor: isDark ? "black" : "lightcoral",
                color: isDark ? 'white' : 'lightcoral',
            }}
        >
            <p>자고싶다</p>

        </div>
    );
};

export default Content;