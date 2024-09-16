// import React from "react";
import "./App.css";
import ironhackLogo from "./assets/images/ironhack-logo.png";
import menuIcon from "./assets/images/menu-top-xs.png";
import icon1 from "./assets/images/icon1.png";
import icon2 from "./assets/images/icon2.png";
import icon3 from "./assets/icon3.png";
import icon4 from "./assets/images/icon4.png";

function App() {
  return (
    <div className="app">
      <header>
        <img src={menuIcon} alt="Menu" className="menu" />
        <img src={ironhackLogo} alt="Ironhack Logo" className="logo" />
      </header>
      <section className="main-section">
        <h1>Welcome to Our Landing Page</h1>
        <div className="icon-grid">
          <img src={icon1} alt="Icon 1" className="icon" />
          <img src={icon2} alt="Icon 2" className="icon" />
          <img src={icon3} alt="Icon 3" className="icon" />
          <img src={icon4} alt="Icon 4" className="icon" />
        </div>
      </section>
    </div>
  );
}

export default App;
