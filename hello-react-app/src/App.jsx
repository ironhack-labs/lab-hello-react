import './App.css';
import ironHackLogo from './src/assets/ironhack-logo-xs.png';
import menuTop from './src/assets//menu-top-xs.png';
import icon1 from './src/assets/icon1.png';
import icon2 from './src/assets/icon2.png';
import icon3 from './src/assets/icon3.png';
import icon4 from './src/assets/icon4.png';


function App() {
  return (
    <div className="App">
      <div className="content">
        <div className="images">
          <img src={ironHackLogo} alt="logo" />
          <img className="menu" src={menuTop} alt="menu"/>
        </div>
        <div className="info">
          <h1>Say hello to<br/>ReactJS</h1>
          <p>You will learn how to use<br/>the most popular frontend library,<br/>and become a super Ninja developer</p>
          <button>Awesome!</button>
        </div>
      </div>
      <div className="icons">
        <div>
          <img src={icon1} alt="icon1" />
          <h2>Declarative</h2>
          <p>React makes it<br/>painless to create<br/>interactive UIs.</p>
        </div>
        <div>
        <img src={icon2} alt="icon2" />
          <h2>Components</h2>
          <p>Build encapsulated<br/>components that<br/>manage their state.</p>
        </div>
        <div>
        <img src={icon3} alt="icon3" />
          <h2>Single-Way</h2>
          <p>A set of immutable<br/>values are passed to<br/>the component's.</p>
        </div>
        <div>
        <img src={icon4} alt="icon4" />
          <h2>JSX</h2>
          <p>Statically-typed,<br/>designed to run on<br/>modern browsers</p>
        </div>
      </div>
    </div>
  );
}
export default App;
