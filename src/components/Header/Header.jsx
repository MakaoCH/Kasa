import React from 'react';
import styles from './Header.module.css';
import Logo from '../../assets/logo-kasa.png'; // import de l'image
import Navbar from '../Navbar/Navbar';


const Header = () => {
    return (
        <div className={styles.Header}>
            <header>
                <img src={Logo} alt="Logo" /> {/* Utilisation de l'image importée */}
                <Navbar />
                
            </header>
       </div>
    );
};

export default Header;
