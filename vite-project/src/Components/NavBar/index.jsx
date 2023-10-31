import ihLogo from '../../assets/ihlogo.png'
import bars from '../../assets/bars.png'

function NavBar() {
    return (
        <div id="nav-bar">
            <img src={ihLogo} alt="IH Logo" />
            <img src={bars} alt="Bars" />
        </div>
    );
}

export default NavBar;