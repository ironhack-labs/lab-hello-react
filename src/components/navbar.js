import logoImage from "./../images/ironhack-logo-xs.png";
import menuImage from "./../images/menu-top-xs.png";

export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <img src={logoImage} alt="logo"></img>

        <img src={menuImage} alt="menu"></img>
      </div>
    </>
  );
}
