import IronHackLogo from "./images/ironhack-logo-xs.png";
import MenuBarImg from "./images/menu-top-xs.png";

const Logo = <img id="iron-logo" src={IronHackLogo} alt="IronHack Logo" />;
const MenuBar = (
  <a id="menu-bar" href="https://www.ironhack.com" target = "_blank" rel="noopener noreferrer">

    <img src={MenuBarImg} alt="menu bar" />
  </a>
);
const HeadingNav = "nav-bar";
function Heading() {
  return (
    <nav className={HeadingNav}>
      {Logo}
      {MenuBar}
    </nav>
  );
}

export default Heading;
