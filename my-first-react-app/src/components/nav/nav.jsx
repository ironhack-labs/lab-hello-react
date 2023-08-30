import ironhackLogo from '../../assets/ironhack-logo-xs.png';
import menuBar from '../../assets/menu-top-xs.png';
import './nav.css';

function Nav () {
    return (
        <div className="navBar">
                <img className="logo" src={ ironhackLogo } alt="ironhack logo" />
                <img className="menu" src={ menuBar } alt="bar menu" />
        </div>
    )
}

export default Nav