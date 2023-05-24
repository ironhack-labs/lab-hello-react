import "../App.js";
import ironhackLogo from "../images/ironhack-logo-xs.png";
import menuImg from "../images/menu-top-xs.png";

function Main() {
  return (
    <div className="main">
      <div className="Navbar">
        <img className="Ironhack-Logo" src={ironhackLogo} alt="ironhack-logo" />
        <img className="Menu-Img" src={menuImg} alt="menu-logo" />
      </div>
      <section className="Section1">
        <h1>Say hello to ReactJS</h1>
        <p>
          You will learn how to use the most popular frontend library, and
          become a super Ninja developer.
        </p>
        <button>Awesome!</button>
      </section>
    </div>
  );
}

export default Main;
