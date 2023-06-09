// src/App.js
import './App.css';
import ironhackLogo from "./images/ironhack-logo-xs.png";
import declarative from "./images/icon1.png"
import components from "./images/icon2.png"
import singleWay from "./images/icon3.png"
import jsx from "./images/icon4.png"

function App() {
  return (
    <div className="App">
     <div className="App-header">
        <img src={ironhackLogo} alt="ironhack-logo" className="App-logo"/>
        <h1>Say hello to ReactJS</h1>
        <p>You will learn how to use <br />
          the most popular frontend library, <br />
          and become a super Ninja developer.
        </p>
        <button>Awesome!</button>
      </div>
      <div className="bottom-part">
        <div>
          <img src={declarative} alt="declarative" />
          <h3>Declarative</h3>
          <p>React makes <br /> it painless to create <br /> interactive UIs.</p>
        </div>  
        <div>
          <img src={components} alt="components" />
          <h3>Components</h3>
          <p>Build encapsulated <br /> components that <br /> manage their state.</p>
        </div>
        <div>
          <img src={singleWay} alt="singleWay" />
          <h3>Single-Way</h3>
          <p>A set of immutable <br /> values are passed to <br /> the components.</p>
        </div>
        <div>
          <img src={jsx} alt="jsx" />
          <h3>JSX</h3>
          <p>Statistically-typed. <br /> designated to run on <br /> modern browsers.</p>
        </div>
      </div>
    </div>
  );
}
export default App;


