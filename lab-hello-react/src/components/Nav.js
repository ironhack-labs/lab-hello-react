import icon1 from '../images/icon1.png';

const Nav = () => {
    return (
        <nav
            style={{ backgroundColor: 'blue' }}
            id='nav'
            height='900'
            width='200'
        >
            <img id='icon1' src={icon1} alt='logo' width='100' height='100' />
        </nav>
    );
};

export default Nav;
