import ironhackLogo from "../images/ironhack-logo-xs.png";
import menuTop from "../images/menu-top-xs.png";

function Navbar() {
  return (
    <nav class=" Navbar navbar">
      <div className="container mt-3 mb-5 mx-5">
        <a class="navbar-brand" href="">
          <img src={ironhackLogo} class="Ironhack-Logo" class="mr-auto"></img>
        </a>
        <a class="navbar-brand ml-auto" href="">
          <img src={menuTop} class="Menu-Top"></img>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
