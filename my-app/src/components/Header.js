import logo from "../images/ironhack-logo-xs.png";
import menuTop from "../images/menu-top-xs.png";

export function Header({ text, children }) {
  return (
    <div className="container1">
      <div>
        <div className="topLeft">
          <img src={logo} alt="logo" />
        </div>
        <div className="topRight">
          <img src={menuTop} alt="menuTop" />
        </div>
      </div>
      <div>
        <h1 className="headText">
          Say Hello to <br />
          ReactJS
        </h1>
        <p className="smallText">
          You will learn how to use <br />
          the most popular frontend library,
          <br />
          and become a super Ninja developer
        </p>
      </div>
    </div>
  );
}
