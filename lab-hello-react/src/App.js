//import logo from './logo.svg';
import './App.css';

//import images
import ironhackLogo from './images/ironhack-logo-xs.png';
import menuTop from './images/menu-top-xs.png';
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png';

function App() {
  return (
    <div className="App">
      <div id="background-div">
        <nav id ="nav-bar">
          <img src={ironhackLogo} alt="ironhackLogo" />
          <img src={menuTop} alt="menuTop" id='menu-top'/>
        </nav>
        <div id="title-content">
          <h1>Say hello to ReactJS</h1>
          <p>You will learn how to use the most popular frontendLibrary, and become a super Ninja developer.</p>
        </div>
      </div>
      <div id="icons-div">
        <div class="container">
          <img src={icon1} alt="icon1" />
          <h3>Declarative</h3>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div class="container">
          <img src={icon2} alt="icon2" />
          <h3>Components</h3>
          <p>Build encapsulated companents that manage their state.</p>
        </div>
        <div class="container">
          <img src={icon3} alt="icon3" />
          <h3>Single-way</h3>
          <p>A set if immutable values are passed to the components.</p>
        </div>
        <div class="container">
          <img src={icon4} alt="icon4" />
          <h3>JSX</h3>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
