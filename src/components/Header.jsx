import ironhackLogo from "../images/ironhack-logo-xs.png";
import menuTop from "../images/menu-top-xs.png";

export const Header = (props) => {
  return (
    <div className="background">
      <div className="nav-bar">
        <img src={ironhackLogo} className="nav-img" alt="ironhack-logo" />
        <img src={menuTop} className="nav-img-menu" alt="menu" />
      </div>
      <div className="heading-text">
        <h1>Say hello to</h1>
        <h1>ReactJS</h1>
        <p>
          You will learn how to use
          <br />
          the most popular frontend library,
          <br />
          and become a super Ninja developer.
        </p>
      </div>
      {props.children}
    </div>
  );
};
