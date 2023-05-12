import React from 'react';
import Logo from '../../assets/logo-kasa-footer.png'; 
import styles from './Footer.module.css';


const Footer = () => {
    return (
        <div className={styles.Footer}>
            <footer>
                <img src={Logo} alt="Logo" /> {/* Utilisation de l'image importée */}
                <p>© 2020 Kasa. All rights reserved</p>
            </footer>
        </div>
    );
};

export default Footer;