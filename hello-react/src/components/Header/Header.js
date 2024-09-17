import NavBar from './NavBar';
import Button from '../UI/Button/Button';
import styles from './Header.module.css';

const Header = (props) => {
    return (
        <header className={styles.header}>
            <NavBar />
            <h1>Say Hello to ReactJS</h1>
            <p>
                You will learn how to use <br />
                the most popular frontend library, <br /> and become a super
                Ninja developer.
            </p>
            <Button>Awesome!</Button>
        </header>
    );
};

export default Header;
