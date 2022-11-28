import imgNav from '../images/Nav.png'
import imgLogo from '../images/ironhack-logo-xs.png'

function Nav() {
    return (
      <div id="nav">
        <img className="logo" src={imgLogo} alt="" />
        <img className="logo" src={imgNav} alt="" />
      </div>
    );
  }
   
  export default Nav;