import './App.css';
import ironhackLogo from "./images/ironhack-logo-xs.png";
import menuIcon from "./images/menu-top-xs.png"
import icon1 from "./images/icon1.png"
import icon2 from "./images/icon2.png"
import icon3 from "./images/icon3.png"
import icon4 from "./images/icon4.png"



function App() {
  return (
    <div className="App">
      <div className="logo">
      <img src={ironhackLogo} alt="logo"/>
      <img src={menuIcon} alt="hamburger menu icon"/>
      </div>

      <div className="splash">
      <h1>Say hello to <br/>ReactJS</h1>
      <p>You will learn how to use <br/> the most popular frontend library, <br/> and become a super ninja developer.</p>
      <a class="button" href="https://reactjs.org/">Awesome!</a>
      </div>
    
      <div className="gallery">

      <div className="icon">
      <img src={icon1} alt="wrench icon"/>
      <h2>Declarative</h2>
      <h3>React makes it painless to create interactive UIs.</h3>
      </div>

      <div className="icon">
      <img src={icon2} alt="play icon"/>
      <h2>Components</h2>
      <h3>Build encapsulated components that mange their state.</h3>
      </div>

      <div className="icon">
      <img src={icon3} alt="setting wheel icon"/>
      <h2>Single-Way</h2>
      <h3>A set of immutable values are passed to the components.</h3>
      </div>

      <div className="icon">
      <img src={icon4} alt="code icon"/>
      <h2>JSX</h2>
      <h3>Statically-typed, and designed to run on modern browsers.</h3>
      </div>
    </div>

  </div>
  );
}
export default App;

