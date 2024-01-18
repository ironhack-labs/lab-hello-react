import logoMenu from "../assets/menu-top-xs.png";
import logoIron from "../assets/ironhack-logo-xs.png";

const Header = () => {
  return (
    <div className="header">
      <div id="logos">
        <img src={logoIron} className="logo-left" />
        <img src={logoMenu} className="logo-right" />
      </div>
      <div id="text">
        <h1>
          Say Hello to
          <br /> ReactJS
        </h1>
        <p className="head-prag">
          You will learn how to use <br />
          the most popular frontend library,
          <br /> and become a super Ninja developer.
        </p>

        <div className="awesome">
          <h2>Awesome!</h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
