import navbar from "../assets/menu-top-xs.png";
import headLogo from "../assets/ironhack-logo-xs.png";

function Navbar() {
  return (
    <div>
      <nav id="nav-img">
        <img src={headLogo} alt="headlogo" />
        <img src={navbar} alt="navbar" />
      </nav>
    </div>
  );
}

export default Navbar;
