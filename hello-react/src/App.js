// src/App.js
import './App.css';
import ironhacklogo from './images/ironhacklogo.png';
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png';
import menutop from './images/menutop.png';


function App() {
  return (
    <div className="App">
      <div className="App-header">
      <img src={ironhacklogo} alt="ironhacklogo" />
      <img src={menutop} alt="menutop"/>
     
      </div>
      <div className="App-greetings">
        <h1>Say hello to ReactJS</h1>
        <p>You will learn how to use the most popular frontend library,
          and become a super Ninja developer.
        </p>
        <button>Awsome!</button>
      </div>
      <div className="App-body">
        <div className="First">
      <img src={icon1} alt="icon1" />
      <h3>Declarative</h3>
      <p>React makes it painless to create interactive UIs</p>
      </div>
      <div className="Second">
      <img src={icon2} alt="icon2" />
      <h3>Components</h3>
      <p>Build encapsulated components that manage their state</p>
      </div>
      <div className="Third">
      <img src={icon3} alt="icon3" />
      <h3>Single-Way</h3>
      <p>A set of immutable values are passed to the component's</p>
      </div>
      <div className="Fourth">
      <img src={icon4} alt="icon4" />
      <h3>JSX</h3>
      <p>Statically-typed, designed to run on modern browsers</p>
      </div>
      </div>
    </div>
  );
}
export default App;