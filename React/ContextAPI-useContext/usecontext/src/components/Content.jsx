import React, { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';
import { UserContext } from '../context/UserContext';

const Content = () => {
    const {isDark} = useContext(ThemeContext)
    const user = useContext(UserContext);
    return(
        <div
            className='content'
            style={{
                backgroundColor: isDark ? "black" : "lightcoral",
                color: isDark ? 'white' : 'lightcoral',
            }}
        >
            <p>{user}자고싶다</p>

        </div>
    );
};

export default Content;