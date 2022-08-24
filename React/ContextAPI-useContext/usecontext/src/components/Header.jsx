import React, { useCallback, useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';

const Header = () => {
    const {isDark} = useContext(ThemeContext);
    return(
        <header
            className='header'
            style={{
                backgroundColor: isDark ? "black" : "lightcoral",
                color: isDark ? 'white' : 'lightcoral',
            }}
        >
            <h1>Welcome 홍길동</h1>

        </header>
    );
};

export default Header;