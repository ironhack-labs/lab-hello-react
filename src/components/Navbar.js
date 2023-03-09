import ironhackLogo from '../images/logo.png'
import toggle from '../images/toogle.png'

function Navbar() {

  return  <nav className="navbar-dark bg-dark">
  <div className="container-fluid d-flex justify-content-between">
    <img className="" src={ironhackLogo}></img>
    <img className="" src={toggle}></img>
  </div>
</nav>
}


export default Navbar 