import logo from './logo.svg';
import ironlogo from './images/ironhack-logo-xs.png';
import menu from './images/menu-top-xs.png';
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png';
import "./styles.css";

import './App.css';


function App() {
  return (
    <div className="App">

        
    
        <div className="nav-bar">
          <div className="nav-items">
            <img src={ironlogo} alt="ironhack logo" />
            <img src={menu} alt="menu" className="image" />
          </div>

        </div>

        <div className="info">
          <img src={logo} alt="logo" className="logo1" />
          <img src={logo} alt="logo" className="logo2" />
          <img src={logo} alt="logo" className="logo3" />
          <div className="info-text">
            <h1>Say hello to ReactJS</h1>
            <h3>You will learn how to use the most popular frontend library, and become a super Ninja developer.</h3>
            <button className="btn">Awesome!</button>
          </div>
        </div>

      <div className="card-sec">
        <div className="card">
          <img src={icon1} alt="icon 1" />
          <h2>Declarative</h2>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div className="card">
        <img src={icon2} alt="icon 2" />
          <h2>Components</h2>
          <p>Build encapsulated components that manage their state.</p>
        </div>
        <div className="card">
        <img src={icon3} alt="icon 3" />
          <h2>Single-Way</h2>
          <p>A set of immutable values are passed to the component's.</p>
        </div>
        <div className="card">
        <img src={icon4} alt="icon 4" />
          <h2>JSX</h2>
          <p>Statically-typed, designed to run on modern browswers.</p>
        </div>
          
      </div>


      
    </div>
  );
}

export default App;
