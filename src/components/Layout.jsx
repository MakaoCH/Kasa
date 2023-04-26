import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Banner from './Banner/Banner';
import styles from './Layout.module.css';

const Layout = () => {
    return (
        <div className={styles.layout}>
            <Header />
            <main className={styles.layoutMain}>
                <Banner />
                <Outlet />
            </main>
            <Footer /> 
        </div>
       
    );
};

export default Layout;