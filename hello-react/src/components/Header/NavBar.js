import styles from './NavBar.module.css';
import ironhacklogo from '../../images/ironhack-logo-xs.png';
import menulogo from '../../images/menu-top-xs.png';

const NavBar = () => {
    return (
        <nav className={styles.navbar}>
            <img src={ironhacklogo} alt='ironhack logo' />
            <img className={styles.menu} src={menulogo} alt='menu icon' />
        </nav>
    );
};

export default NavBar;
