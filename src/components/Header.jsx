import ironhackLogo from "../assets/images/ironhack-logo-xs.png";
import menuTop from "../assets/images/menu-top-xs.png";

function Header() {
  return (
    <div className="header">
      <nav className="navbar">
        <a href="#">
          <img src={ironhackLogo} />
        </a>
        <a href="#">
          <img src={menuTop} />
        </a>
      </nav>
      <div>
        <h1>Say hello to ReactJS</h1>
        <p>
          You will learn how to use the most popular front end library, and
          become a super ninja developer.
        </p>
        <button className="button">Awesome!</button>
      </div>
    </div>
  );
}

export default Header;
