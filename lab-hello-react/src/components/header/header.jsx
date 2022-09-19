import './header.css';
import logo from '../../images/ironhack-logo-xs.png'
import bar from '../../images/menu-top-xs.png'

function Header(){
    return (
        <div className = {'header'}>
            <img src={`${logo}`} alt={"iron-logo"} />;
            <img className={"imgsmall"} src={`${bar}`} alt={"nav"} />
        </div>        
    )
}

export default Header;