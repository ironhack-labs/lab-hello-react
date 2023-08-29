import logo from "../images/ironhack-logo-xs.png";
import menu from "../images/menu-top-xs.png";

function Header() {
  return (
    <div className="header">
      <div className="header-top">
        <img src={logo} alt="" className="header-logo" />
        <img src={menu} alt="" className="header-menu" />
      </div>
      <div className="header-content">
        <h1>Say hello to ReactJS</h1>
        <p>
          You will learn how to use the most popular frontend library, and
          become a super Ninja developer.
        </p>
        <button>Awesome!</button>
      </div>
    </div>
  );
}

export default Header;
