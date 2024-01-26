import "./TopSection.css";
import ironHackLogo from "../../assets/ironhack-logo-xs.png";
import menu from "../../assets/menu-top-xs.png";
const TopSeccion = () => {
  return (
    <div className="TopSection">
      <div className="Navbar">
        <div className="Navbar-logo">
          <img src={ironHackLogo} />
        </div>
        <div className="Navbar-menu">
          <img src={menu} />
        </div>
      </div>
      <div className="content">
        <h1>
          Say hello to<br></br>ReactJS
        </h1>
        <p>
          You will learn how to use the most popular frontend library, and
          become a super Ninja developer.
        </p>
      </div>
      <a>Awesoeme!</a>
    </div>
  );
};

export default TopSeccion;
