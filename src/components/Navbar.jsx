import ironhackLogo from "../images/ironhack-logo-xs.png";
import menuTop from "../images/menu-top-xs.png";

function Navbar() {
  return (
    <nav class="navbar">
      <div className="d-flex justify-content-between">
        <a className="p2" href="">
          <img src={ironhackLogo} alt="Ironhack-Logo"></img>
        </a>
        <a className="p2" href="">
          <img src={menuTop} alt="Menu-Top"></img>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
