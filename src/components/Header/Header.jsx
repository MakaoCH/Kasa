import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/logo-kasa.png'; // import de l'image


const Header = () => {
    return (
        <div className='Header'>
            <header>
                <img src={Logo} alt="Logo" /> {/* Utilisation de l'image importée */}
                <nav>
                    <ul>
                        <li><Link to="/">Accueil</Link></li>
                        <li><Link to="/Apropos">A propos</Link></li>
                    </ul>
                </nav>
                
            </header>
       </div>
    );
};

export default Header;
