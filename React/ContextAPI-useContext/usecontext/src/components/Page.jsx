import React, { useContext } from 'react';
// import { ThemeContext } from '../Context/ThemeContext';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';

const Page = () => {
    // const data = useContext(ThemeContext)
    return (
        <div className='Page'>
            <Header></Header>
            <Content></Content>
            <Footer></Footer>
        </div>
    ); 
};


export default Page;