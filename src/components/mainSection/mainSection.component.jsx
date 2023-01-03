import "./mainSection.style.scss";
import logo from "../../images/ironhack-logo-xs.png";
import menuIcon from "../../images/menu-top-xs.png";

export default function MainSection() {
  return (
    <div className="mainSection">
      <div className="menu">
        <img src={logo} alt="" />
        <img src={menuIcon} alt="" width="24" height="13" />
      </div>
      <div className="message">
        <h1>Say hello to ReactJS</h1>
        <p>
          You will learn how to use the most popular frontend library, and
          become a super Ninja developer
        </p>
        <button>Awesome!</button>
      </div>
    </div>
  );
}
