// src/App.js
import './App.css';
import logo from './images/logo.png'
import burger from './images/menu-top-xs.png'
import icon1 from './images/icon1.png'
import icon2 from './images/icon2.png'
import icon3 from './images/icon3.png'
import icon4 from './images/icon4.png'

function App() {
  return (
    <div className="App">
      <div className='black'>
        <header>
          <img src={logo} alt="logo"/>
          <img className='headerBurger' src={burger} alt="menu"/>
        </header>
        <body>
          <div className='helloPage'>
            <h1>Say hello to ReactJS</h1>
            <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
            <button type="button">Awesome!</button>
          </div>
        </body>
      </div>
      <div class="white">
        <div>
          <img src={icon1} alt="icon1"/>
          <h3>Declarative</h3>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div>
          <img src={icon2} alt="icon2"/>
          <h3>Components</h3>
          <p>Build encapsulated components that manage their state.</p>
        </div>
        <div>
          <img src={icon3} alt="icon3"/>
          <h3>Single-Way</h3>
          <p>A set of immutable values are passed to the component's.</p>
        </div>
        <div>
          <img src={icon4} alt="icon4"/>
          <h3>JSX</h3>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
      </div>
    </div>
  );
}
export default App;