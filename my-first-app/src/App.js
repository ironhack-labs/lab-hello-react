// src/App.js
import './App.css';
import ironhackLogo from './images/ironhack.png';
import menu from './images/menu.png';
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png';

function App() {
  return (
    <div className="App">
      <header>
      <div className="head">
        <img src={ironhackLogo} alt="logo"></img>
        <img src={menu} alt="menu"></img>
      </div>
        <h1>
          Say hello to <br></br> ReactJS
        </h1>
        <p1> 
          You will learn how to use <br></br> the most popular frontend library,{" "}
          <br></br> and become a super Ninja developer
        </p1>
        <button type="button">Awesome!</button>
      </header>
      <article>
        <div className="container">
          <img src={icon1} alt="icon 1"></img>
          <h2>Declarative</h2>
          <p2>Reach makes it<br></br>
          painless to create interactive UIs</p2>
        </div>
        <div className="container">
          <img src={icon2} alt="icon 2"></img>
          <h2>Components</h2>
          <p2>Build encapsulated<br></br>
          components that <br></br>
          manage their state</p2>
        </div>
        <div className="container">
          <img src={icon3} alt="icon 3"></img>
          <h2>Single-Way</h2>
          <p2>A set of immutable<br></br>
          values are passed to <br></br>
          the components</p2>
        </div>
        <div className="container">
          <img src={icon4} alt="icon 4"></img>
          <h2>JSX</h2>
          <p2>Statically-typed,<br></br>
          designed to run on <br></br>
          modern browsers</p2>
        </div>
      </article>
    </div>
  );
}

export default App;