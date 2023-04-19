import React from 'react';
import Logo from '../../assets/logo-kasa-footer.png'; 


const Footer = () => {
    return (
        <div className='Footer'>
             <img src={Logo} alt="Logo" /> {/* Utilisation de l'image importée */}
             <p>© 2020 Kasa. All rights reserved</p>
        </div>
    );
};

export default Footer;