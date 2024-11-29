import logo from "../../assets/ironhack-logo-xs.png"
import menu from "../../assets/menu-top-xs.png"

function Navbar( { className = "" }) {
    return (
        <nav className = {`d-flex justify-content-between bg-dark align-items-center py-3 px-5 ${className}`}>
            <img src={logo} alt="Ironhack Logo" className="img-fluid" />
            <img src={menu} alt="Menu" className="img-fluid" />
        </nav>
    );
}

export default Navbar;