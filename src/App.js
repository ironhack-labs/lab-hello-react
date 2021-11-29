import './App.css';
import ironHack from "./images/ironHackLogo.png"
import menuNav from "./images/navbarlogo.png"
import tool from "./images/toolLogo.png"
import pluma from "./images/plumaLogo.png"
import mac from "./images/macLogo.png"
import coding from "./images/codingLogo.png"



function App() {
  return (
    <div className="App">
    <div className="container1">
      <div class="icontainer">
        <img src={ironHack} alt="Ironhack logo"/>
        <img id="menuNav" src={menuNav} alt="menuNav"/>
      </div>
      <div className="text-container">
        <h1>Say hello to ReactJS</h1>
        <p>
          You will learn how to use the most popular frontend library, 
          and become a super Ninja developer
        </p>
        <button class="button">Awesome!</button>
      </div>
    </div>

    <div className="container2">
      <div className="container3">
        <img src={tool} alt="declarative logo"/>
        <h2>Declarative</h2>
        <p>React makes it painless to create interactive UIs.</p>
      </div>
      <div className="container3">
        <img src={pluma}  alt="Components icon"/>
        <h2>Components</h2>
        <p>Build encapsulated components that manage their state.</p>
      </div>
      <div className="container3">
        <img src={mac}  alt=" icon"/>
        <h2>Single-Way</h2>
        <p>A set of immutable values are passed to the component's.</p>
      </div>
      <div className="container3">
        <img src={coding}  alt="JSX icon"/>
        <h2>JSX</h2>
        <p>Statically-typed, designed to run on modern browsers.</p>
      </div>
    </div>

  </div>
);
}
export default App;