/* eslint-disable react/no-unescaped-entities */
// src/App.jsx
import logo from "./assets/ironhack-logo-xs.png";
import menu from "./assets/menu-top-xs.png";
import icon1 from "./assets/icon1.png";
import icon2 from "./assets/icon2.png";
import icon3 from "./assets/icon3.png";
import icon4 from "./assets/icon4.png";
import './App.css';
/* import LandingPage from "./LandingPage/index.jsx"; */ //dava para ter tranformado a imagem svg em png e usado como background

function App() {
  return (
    <div className="App">
      <div className="first-part">
        <nav>
          <img src={logo} alt="ironhack logo"/>
          <img src={menu} alt="menu icon"/>
        </nav>
        <h1>Say hello to <br/>
                ReactJS</h1>
            <p>You will learn how to use <br/>
                the most popular frontend library, <br/>
                and become a super Ninja developer.</p>
            <button>Awsome!</button>
      </div>
      <div className="second-part">
        <div>
          <img src={icon1} alt="declarative icon"/>
          <h2>Declarative</h2>
          <p>React makes it <br/> painless to create <br/> interactive UIs.</p>
        </div>
        <div>
          <img src={icon2} alt="components icon"/>
          <h2>Components</h2>
          <p>Build encapsulated <br/> components that <br/> manage their state.</p>
        </div>
        <div>
          <img src={icon3} alt="single-way"/>
          <h2>Sibgle-Way</h2>
          <p>A set of immutable <br/> values are passed to <br/> the component's.</p>
        </div>
        <div>
          <img src={icon4} alt="JSX icon"/>
          <h2>JSX</h2>
          <p>Statically-typed, <br/> designed to run on <br/> modern browsers.</p>
        </div>
      </div>
    </div>
  )
}

export default App;