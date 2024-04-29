//  importamos las imágenes
import ironhackLogo from "../assets/ironhack-logo.png";
import menu from "../assets/menu.png";

function Header() {
    const navStyles = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    }
  return (
    <nav style={navStyles}>
      <img src={ironhackLogo} alt="Ironhack logo" />
      <img src={menu} alt="burger menu" width="24px" height="12px"/>
    </nav>
  );
}

export default Header;
