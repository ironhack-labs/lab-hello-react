// src/App.jsx
import './App.css';
import IronhackLogo from "./assets/ironhack-logo-xs.png";
import BurgerMenu from "./assets/menu-top-xs.png"
import Icon1 from "./assets/icon1.png"
import Icon2 from "./assets/icon2.png"
import Icon3 from "./assets/icon3.png"
import Icon4 from "./assets/icon4.png"

function App() {
  return (
    <div className="App">
      <div id="blue-block">
        <div id="header">
          <nav>
            <img src={IronhackLogo} alt="Ironhack Logo" />
            <img id="burger-menu" src={BurgerMenu} alt="Burger Menu" />
          </nav>
        </div>
        <div id="main-content">
            <h1>Say hello to<br></br>ReactJS</h1>
            <p>You will learn how to use<br></br>
            the most popular frontend library<br></br>
            and become a super Ninja developer</p>
            <button><bold>Awesome!</bold></button>
        </div>
      </div>
      <div id="icons-section">
        <div class="icons">
          <img src={Icon1} alt="" />
          <h2>Declarative</h2>
          <p>React makes it<br></br>
          painless to create<br></br>
          interactive UIs</p>
        </div>
        <div class="icons">
          <img src={Icon2} alt="" />
          <h2>Declarative</h2>
          <p>React makes it<br></br>
          painless to create<br></br>
          interactive UIs</p>
        </div>
        <div class="icons">
          <img src={Icon3} alt="" />
          <h2>Declarative</h2>
          <p>React makes it<br></br>
          painless to create<br></br>
          interactive UIs</p>
        </div>
        <div class="icons">
          <img src={Icon4} alt="" />
          <h2>Declarative</h2>
          <p>React makes it<br></br>
          painless to create<br></br>
          interactive UIs</p>
        </div>
      </div>
    </div>
  );
}

export default App;