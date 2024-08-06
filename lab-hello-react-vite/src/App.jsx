// src/App.jsx
import './App.css';
import ironhackLogo from './assets/ironhack-logo-xs.png';
import menuTop from './assets/menu-top-xs.png';
import icon1 from './assets/icon1.png';
import icon2 from './assets/icon2.png';
import icon3 from './assets/icon3.png';
import icon4 from './assets/icon4.png';

function App() {
  return (
    <div className="AppWrapper">
      <div className="App"></div>
      <nav className='nav'>
        <img src={ironhackLogo} alt="ironhack logo" />
        <img src={menuTop} alt="menu top" />
      </nav>

      <header className='header'> Say hello to ReactJS</header>
      <p>You will learn a how to use the most popular frontend library, and become a super Ninja Developer</p>

      <button>Awesome!</button>

      <div className="icons">
        <img src={icon1} alt="icon1" />
        <h2>Declarative</h2>
        <p>React makes it painless to create interactive UIs</p>
        <img src={icon2} alt="icon2" />
        <h2>Components</h2>
        <p>Build encapsulated components that manage their state</p>
        <img src={icon3} alt="icon3" />
        <h2>Single-Way</h2>
        <p>A set of immutable values are passed to the components</p>
        <img src={icon4} alt="icon4" />
        <h2>JSX</h2>
        <p>Statically-typed, designed to run on modern browsers</p>
      </div>
    </div>

  );
}

export default App;
