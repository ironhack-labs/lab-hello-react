import ironLogo from "./assets/images/iron-hack-logo.png";
import navImg from "./assets/images/menu-top-xs.png";

function Navigator() {
  return (
    <header id="headerNav">
      <img src={ironLogo} height="40px" alt="logotipo ironhack" />
      <img src={navImg} height="10px" alt="navegador" />
    </header>
  );
}

export default Navigator;
