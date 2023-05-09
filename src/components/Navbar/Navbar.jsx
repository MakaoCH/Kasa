import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <div>
      <nav className={styles.Navbar}>
        <ul>
          <li className={pathname === '/' ? styles.active : null}><Link to="/">Accueil</Link></li>
          <li className={pathname === '/About' ? styles.active : null}><Link to="/About">A propos</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
