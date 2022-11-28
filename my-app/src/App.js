import './App.css';
import MyButton from './components/awesomeButton';
import Icon from './components/bottomIcon';
import logo from './images/ironhack-logo-xs.png';
import menuLogo from './images/menu-top-xs.png'
import icon1 from './images/icon1.png'
import icon2 from './images/icon2.png'
import icon3 from './images/icon3.png'
import icon4 from './images/icon4.png'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo" src={logo} />
        <img className="App-logo-menu" src={menuLogo} />

      </header>
      <section className="App-section">
        <h1>Say hello to ReactJS</h1>
        <p className="sayHelloP">You will learn how to use the most popular frontend library,
          and become a super Ninja developer.
        </p>
        <MyButton/>
      </section>

      <section className="React-features">
        <div>
          <img src={icon1}></img>
          <h3> Declarative</h3>
          <p> React makes it painles to create interactive UIs.</p>
        </div>
        <div>
          <img src={icon2}></img>
          <h3> Components</h3>
          <p> Build encapsulated components that manage their state.</p>
        </div>
        <div>
          <img src={icon3}></img>
          <h3> Single-Way</h3>
          <p> A set of immutable values are passed to the components's.</p>
        </div>
        <div>
          <img src={icon4}></img>
          <h3> JSX</h3>
          <p> Statically-typed, designed to run on modern browsers.</p>
        </div>

      </section>
    </div>
  );
}

export default App;
