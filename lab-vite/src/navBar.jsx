import IronLogo from "./assets/iron-logo.png"
import MenuTop from "./assets/menu-top.png"
import "./navBar.css"

function NavBar() {
     return (<nav className="navbar bg-body-transparent">
        <div className="container-fluid margin-left">
            <img src={IronLogo} className="navbar-brand images-size"></img>
            <img src={MenuTop} className="navbar-brand images-size"></img>
        </div>
    </nav>)
}

export default NavBar;