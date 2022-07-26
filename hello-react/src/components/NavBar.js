import ironLogo from "../images/ironhack-logo-xs.png";
import menu from "../images/menu-top-xs.png";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <>
      <nav class="navbar">
        <div >
          <img src={ironLogo} alt="ironLogo" />
        </div>

        <div >
          <img src={menu} alt="menu" />
        </div>
      </nav>
    </>
  );
};
