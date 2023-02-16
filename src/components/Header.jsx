import hamburgerMenu from '../images/hamburger-menu.png';
import ironLogo from "../images/ironhack-logo-xs.png";



function Header(){
    return (
        <div className="Header" class="header">
        <nav>
            <img src={ironLogo} alt="ironhack-logo" />
            <img src={hamburgerMenu} alt="menu" />
        </nav>
        <div>
        <h1>Say hello to ReactJS</h1>
        <p>You will learn how to use the most popular frontend library and become a super Ninja developer.</p>
        <button>Awesome!</button>
        </div>  
        </div>
      )
}

export default Header