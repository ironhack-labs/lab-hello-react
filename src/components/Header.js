import ironhackLogo from "../images/ironhack-logo-xs.png";
import menuTop from "../images/menu-top-xs.png"

function Header(){
    return (
        <div id="header">
            <div id="nav">
                <img src={ironhackLogo} alt="ironhack"/>
                <img className="menu" src={menuTop} alt="menu"/>
            </div>
            <div id="header-body">
                <h1>Say hello to ReactJs</h1>
                <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
                <button type="button">Awesome!</button>
            </div>
        </div>
    )
}

export default Header;