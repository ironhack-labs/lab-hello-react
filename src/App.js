// src/App.js
import './App.css';
import logo from './images/ironhack-logo-xs.png'
import menuI from './images/menu-top-xs.png'
import one from './images/icon1.png'
import two from './images/icon2.png'
import three from './images/icon3.png'
import four from './images/icon4.png'
function App() {
  return (
    <div className="App">
    <div className='blue-container'>
        <div className='nav-bar'>
          <img id='logo' src={logo}></img>
          <img id="menuI" src={menuI}></img>
        </div>
        <div className='mid-container'>
          <h1>Say hello to ReactJs</h1>
          <p>You will learn how to use the most popular frontend library, and become a super Ninja developer</p>
          <a id='link' href="#">Awesome!</a>
        </div>
      </div>
      <div className="white-container">
        <div className='module-container'>
        <img className='icons' src={one}></img>
        <h3>Declarative</h3>
        <p>React makes it painless to create interactive UIs</p>
        </div>
        <div className='module-container'>
          <img className='icons' src={two}></img>
          <h3>Components</h3>
          <p>Build encapsulated components that manage their state</p>
        </div>
        <div className='module-container'>
          <img className='icons' src={three}></img>
          <h3>Single-Way</h3>
          <p>A set of immutable values are passed to the component's</p>
        </div>
        <div className='module-container'>
          <img className='icons' src={four}></img>
          <h3>JSX</h3>
          <p>Statically-typed designed to run on modern browsers</p>
        </div>

      </div>
    </div>
  );
}
export default App;
