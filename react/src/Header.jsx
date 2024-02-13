import ironhackLogo from "./assets/ironhack-logo-xs.png";
import menuTop from "./assets/menu-top-xs.png";
function Header() {
  return (
    <div>
      <img src={ironhackLogo} width="25px" alt="ironhack-logo" />
      <img src={menuTop} width="25px" alt="menu-top" />
    </div>
  );
}

export default Header;
