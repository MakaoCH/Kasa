import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Banner from './Banner/Banner'

const Layout = () => {
    return (
        <div className='Layout'>
            <Header/>
            <Banner/>
            <Outlet/>
            <Footer/> 
        </div>
    );
};

export default Layout;