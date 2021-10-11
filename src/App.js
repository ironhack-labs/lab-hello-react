import './App.css';
import ihlogo from "./images/ih.png"
import mnutop from "./images/mnutop.png"
import tuerk from "./images/tuerk.png"
import component from "./images/education.png"
import singleway from "./images/pantalla.png"
import jsx from "./images/jsx.png"
function App() {
  return (
    <div className="App">
    <div class="header">
      <img src={ihlogo} alt="ihlogo" />
      <img src={mnutop} alt= "mnutop" />
      </div>
      <div class="words">
        <h1>Say hello to</h1>
        <h1>REACTJS</h1>
        <p>Yo will learn how to use</p>
        <p>the most popular fronted library,</p>
        <p>and become a super Ninja Developer.</p>
        <button>Awesome!</button>
      </div>
      <div class="imgsabajo">
        <div class="tuerk">
          <img src={tuerk} alt="tuerk"/>
          <h3>Declarative</h3>
          <p>React makes it painless to create interactive UIS.</p>
        </div>
        <div class="components">
          <img src={component} alt="component"/>
          <h3>Component</h3>
          <p>Build encapsulated components that manage their state.</p>
        </div>
        <div class="singleway">
          <img src={singleway} alt="singleway"/>
          <h3>Single-Way</h3>
          <p>A set of inmutable values are passed to the components.</p>
        </div>
        <div class="jsx">
          <img src={jsx} alt="jsx"/>
          <h3>JSX</h3>
          <p>Statically-typed designed to run on modern browsers</p>
        </div>
      </div>
      </div>
  );
}
export default App;