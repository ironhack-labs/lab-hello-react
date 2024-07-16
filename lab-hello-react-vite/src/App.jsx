// src/App.jsx
import './App.css';
//Importing the downloaded assets
import IronHackLogo from './assets/ironhack-logo-xs.png';
import BurgerMenu from './assets/menu-top-xs.png';
import Declarative from './assets/icon1.png';
import Components from './assets/icon2.png';
import SingleWay from './assets/icon3.png';
import JSX from './assets/icon4.png';
//Preparing the app and html od the landing page
function App() {
  return (
    <div className="App">

      <section className="aboveFold">

        <nav><img src={IronHackLogo} alt="" /><img src={BurgerMenu} alt="" /></nav>
        <div className="container">
        <h1 className="title">Say Hello to ReactJS</h1>
        <p className="introduction">You will learn to use the most popular frontend library, and become a super Ninja developer.</p>
        <button>Awesome!</button>
        </div>

      </section>

      <section className="characteristics">
        <div className="characteristic">
          <img src={Declarative} alt="" />
          <h2>Declarative</h2>
          <p>React makes it painless to create interactive UIs</p>
        </div>
        <div className="characteristic">
          <img src={Components} alt="" />
          <h2>Components</h2>
          <p>React makes it painless to create interactive UIs</p>
        </div>
        <div className="characteristic">
          <img src={SingleWay} alt="" />
          <h2>Single-Way</h2>
          <p>React makes it painless to create interactive UIs</p>
        </div>
        <div className="characteristic">
          <img src={JSX} alt="" />
          <h2>JSX</h2>
          <p>React makes it painless to create interactive UIs</p>
        </div>
      </section>
    </div>
  );
}

export default App;
