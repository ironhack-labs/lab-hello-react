import ironhackLogo from "../images/ironhack-logo-xs.png";
import menuSymbol from "../images/menu-top-xs.png"

export function Header() {
    console.log("Header")
    return (
        <div className="header">
            <img src={ironhackLogo} alt="ironhack logo"></img>
            <img src={menuSymbol} alt="menu symbol"></img>
        </div>        
    );
}