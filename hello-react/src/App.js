import logo from './logo.svg';
import ironhackLogo from './images/ironhack-logo-xs.png'
import menuIcon from './images/menu-top-xs.png'
import icon1 from './images/icon1.png'
import icon2 from './images/icon2.png'
import icon3 from './images/icon3.png'
import icon4 from './images/icon4.png'
import './App.css';

function App() {
  return (
    <div className= "main">
    <div className="contenido">
      <div className="navbar">
        <img src={ironhackLogo} alt="logo" />
        <img src={menuIcon} alt="menu" />
      </div>
      <div>
      <h1>Say hello to React JS</h1>
      <p className="titleP">You will learn to use the most popular frontend library, and become a super Ninja developer</p>
      <button>Awesome!</button>
    </div>
    </div>
    <div className="info">
      <div className="card">
        <img src={icon1} alt= "icon1"></img>
        <strong>Declarative</strong>
        <p>React makes it painless to create interactive UI's</p>
      </div>
      <div className="card">
        <img src={icon2} alt= "icon2"></img>
        <strong>Declarative</strong>
        <p>Build encapsulated components that manage their state</p>
      </div>
      <div className="card">
        <img src={icon3} alt= "icon3"></img>
        <strong>Declarative</strong>
        <p>A set of inmmutable values are passed to the component's</p>
      </div>
      <div className="card">
        <img src={icon4} alt= "icon4"></img>
        <strong>Declarative</strong>
        <p>Statically-typed designed to run on modern browsers.</p>
      </div>
    </div>
    </div>
    
  );
}

export default App;
