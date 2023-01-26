import "./navbar.css";
import Logo from "../../images/ironhack-logo-xs.png"
import Menu from "../../images/menu-top-xs.png"

const Navbar = () => {
    return (
     
            <nav className="Navbar">
                <div>
                    <img src={Logo} alt="logo"></img>
                </div>
                <div>
                    <img src={Menu} alt="menu"></img>
                </div>
            </nav>
      


    )
}

export default Navbar;