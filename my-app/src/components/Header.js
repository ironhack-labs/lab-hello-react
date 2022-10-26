import ironhackLogo from "../images/ironhack-logo-xs.png";
import menuSymbol from "../images/menu-top-xs.png"

export function Header() {
    return (
        <div className="header">
            <img src={ironhackLogo} alt="ironhack logo"></img>
            <img src={menuSymbol} alt="menu symbol" id="menuSymbol"></img>
        </div>        
    );
}