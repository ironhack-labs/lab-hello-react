import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon3.png';
import logo from './images/ironhack-logo-xs.png';
import menu from './images/menu-top-xs.png';
import './App.css';

function App() {
  return (
    <div className="App">
    <div className="header">
      <div className="head">
        <img src={logo} ></img>
        <img src={menu} ></img>
      </div>

      <div className="text">
        <p id="firstText">Say hello to ReactJS</p>
        <p> You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
        <button id="firstButton">Awesome!</button>
      </div>

      </div>

      <div className="container">
        <div className="box">
          <img src={icon1}></img>
          <p className="boldText">Declarative</p>
          <p className="subtitle">React makest it painless to create interactive UIs.</p>
        </div>
        
        <div className="box">
          <img src={icon2}></img>
          <p className="boldText">Components</p>
          <p className="subtitle">Build encapsulated components that manage their state.</p>
        </div>
        
        <div className="box">
          <img src={icon3}></img>
          <p className="boldText">Single-Way</p>
          <p className="subtitle">A set of immutable values are passed to the component's.</p>
        </div>

        <div className="box">
          <img src={icon4}></img>
          <p className="boldText">JSX</p>
          <p className="subtitle">Statically typed, designed to run on modern browsers.</p>
        </div>



      </div>

    </div>
  );
}

export default App;
