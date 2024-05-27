// src/App.jsx
import './App.css';
import ironhackLogo from './assets/logo.png';
import tabIcon from './assets/tab-icon.png';
import icon1 from './assets/icon1.png';
import icon2 from './assets/icon2.png';
import icon3 from './assets/icon3.png';
import icon4 from './assets/icon4.png';

function App() {
  return (
    <div className="App">

      <header className="header">
        <img src={ironhackLogo} alt="Ironhack Logo" className="logo" />
        <img src={tabIcon} alt="Tab Icon" className="tab-icon" />
      </header>

      <main className="main-content">
        <h1>Say hello to </h1>
         <h1> ReactJS</h1>
        <p>You will learn how to use </p>
        <p>the most popular frontend library, </p>
         <p>and become a super Ninja developer.</p>
        <button>Awesome!</button>
        </main>

      <div className="icons">
        <div className="icon-container">
          <img src={icon1} alt="Icon 1" />
          <h3>Declarative</h3>
          <p>React makes it painless to create interactive UIs</p>
        </div>
        <div className="icon-container">
          <img src={icon2} alt="Icon 2" />
          <h3>Components</h3>
          <p>Buid encapsulated components that managw their state.</p>
        </div>
        <div className="icon-container">
          <img src={icon3} alt="Icon 3" />
          <h3>Single-Way</h3>
          <p>A set of immutable value are passed to the component's</p>
        </div>
        <div className="icon-container">  
          <img src={icon4} alt="Icon 4" />
          <h3>JSX</h3>
          <p>Statically-typed, designed to run on modern browsers</p>
        </div>
      </div>
      
    </div>
  );
}

export default App;