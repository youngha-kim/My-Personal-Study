import React, { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';


const Footer = () => {

    const {isDark , setIsDark} = useContext(ThemeContext); 

    const toggleTheme = () => {
        setIsDark(!isDark);
    }

    return(
        <footer
            className='footer'
            style={{
                backgroundColor: isDark ? "black" : "lightcoral",
            }}
        >
           <button className='button' onClick={toggleTheme}>
            Coral Mode
           </button>

        </footer>
    );
};

export default Footer;