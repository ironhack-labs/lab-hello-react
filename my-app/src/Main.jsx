import "./App.css";
import ironhackLogo from "./images/ironhack-logo-xs.png";
import menuImg from "./images/menu-top-xs.png";

function Main() {
  return (
    <div className="main">
      <div className="navbar">
        <img src={ironhackLogo} alt="ironhack-logo" />
        <img src={menuImg} alt="menu-logo" />
      </div>
      <section className="section1">
        <h1>Say hello to ReactJS</h1>
        <p>ahsahsuahusahushau</p>
      </section>
    </div>
  );
}

export default Main;
