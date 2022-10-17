import React, { useCallback, useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';
import { UserContext } from '../context/UserContext';

const Header = () => {
    const {isDark} = useContext(ThemeContext);
    const user = useContext(UserContext);


    return(
        <header
            className='header'
            style={{
                backgroundColor: isDark ? "black" : "lightcoral",
                color: isDark ? 'white' : 'lightcoral',
            }}
        >
            <h1>Welcome {user}</h1>

        </header>
    );
};

export default Header;