// import "./Head.css";
import ironhackLogo from "../assets/ironhack-logo-xs.png";
import menuTop from "../assets/menu-top-xs.png";

const Head = () => {
  return (
    <div className="Head">
      <nav className="Navbar">
        <img className="Img1" src={ironhackLogo} />
        <img className="Img2" src={menuTop} />
      </nav>
      <div className="Text">
        <h1 className="FirstH1">Say hello to</h1>
        <h1 className="SecondH1">ReactJs</h1>
      </div>
      <p className="Parr1">
        You will learn how to use the most popular frontend library, and become
        a super Ninja developer.
      </p>
      <button className="Button1">Awesome!</button>
    </div>
  );
};

export default Head;
