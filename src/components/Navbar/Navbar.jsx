import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
    const location = useLocation();
    const activeRoute = location.pathname;

    return (
        <div>
            <nav className={styles.Navbar}>
                <ul>
                    <li className={activeRoute === '/' ? styles.active : ''}><Link to="/">Accueil</Link></li>
                    <li className={activeRoute === '/Apropos' ? styles.active : ''}><Link to="/Apropos">A propos</Link></li>
                </ul>
            </nav>
        </div>
  );
};

export default Navbar;
