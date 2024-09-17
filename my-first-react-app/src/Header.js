import "./App";
import IronhackLogo from "./images/ironhack-logo-xs.png";
import MenuTop from "./images/menu-top-xs.png";

function Header() {
  return (
    <div className="App-header">
      <div className="App-navbar">
        <img src={IronhackLogo} alt="ironhack-logo" />
        <img src={MenuTop} alt="Menu-Top" />
      </div>
      <div className="Hello-React">
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
