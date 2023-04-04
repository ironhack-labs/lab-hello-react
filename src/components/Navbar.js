import logo from "../images/ironhack-logo.png"
import menu from "../images/menu-top.png"

function Navbar() {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid dark">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top"/>
            {/* Bootstrap */}
        </a>
        <a className="navbar-brand" href="#">
          <img src={menu} alt="Logo" width="30" height="24" className="d-inline-block align-text-top"/>
            {/* Bootstrap */}
        </a>
      </div>
    </nav>
  )
}

export default Navbar