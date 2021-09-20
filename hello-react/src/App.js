import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      <div className="App-top-page">
  
        <div className="Nav-bar">
          <img src='./images/ironhack-logo-xs.png' />
          <img src='./images/menu-top-xs.png' />
        </div>

        <div className="App-Intro-Box">
          <h1>Say hello to ReactJS</h1>
          <h4>You will learn how to use the most popular frontend library, and become a super Ninja developer.</h4>
          <button>Awesome!</button>
        </div>

      </div>

      <div className="App-bottom-page">

        <div className="App-bottom-container">
          <img src='./images/icon1.png' />
          <h2>Declarative</h2>
          <h4>React makes it painless to create interactive UIs.</h4>
        </div>

        <div className="App-bottom-container">
          <img src='./images/icon2.png' />
          <h2>Components</h2>
          <h4>Build encapsulated components that manage their state.</h4>
        </div>

        <div className="App-bottom-container">
          <img src='./images/icon3.png' />
          <h2>Single-Way</h2>
          <h4>A set of immutable values are passed to the component's.</h4>
        </div>

        <div className="App-bottom-container">
          <img src='./images/icon4.png' />
          <h2>JSX</h2>
          <h4>Statically-typed designed to run on modern browsers.</h4>
        </div>

      </div>

    
    </div>
  );
}

export default App;
