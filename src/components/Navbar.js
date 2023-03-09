import ironhackLogo from '../images/logo.png'
import toggle from '../images/toggle.png'

function Navbar() {

  return  <nav className="Navbar">
  <div className="container-fluid d-flex justify-content-between">
    <img className="App-logo mt-3 ms-5" src={ironhackLogo}></img>
    <img className="Toggle-logo mt-4 me-5" src={toggle}></img>
  </div>
</nav>
}


export default Navbar 