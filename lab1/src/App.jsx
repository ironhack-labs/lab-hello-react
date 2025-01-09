import "./App.css";

import ironHackLogo from "./images/ironhack-logo-xs.png";
import sideSandwich from "./images/menu-top-xs.png";

import declImg from "./images/herr.png"
import compImg from  "./images/poratil.png"
import singleImg from "./images/ordenador.png"
import jsxImg from "./images/poratil2.png"

import Card from './components/Card/Card'
import TextCard from "./components/TextCard/TextCard";

function App() {
  return (
    <div className="App">
      <div className="mainDiv">
        <div className="navBar">
          <a href="">
            <img src={ironHackLogo} alt="iron-logo" />
          </a>
          <a href="">
            <img src={sideSandwich} alt="side-bar" />
          </a>
        </div>
        
        {/* <TextCard title="Say hello to ReactJS" description="You will learn how to use the most popular frontend library, and
            become a super Ninja developer." button="Awesome!"/> */}
        <div className="textDiv">
          <h1>
            Say hello to <br /> ReactJS
          </h1>
          <p>
            You will learn how to use <br /> the most popular frontend library, <br /> and
            become a super Ninja developer.
          </p>
          <button>Awesome!</button>
        </div>

      </div>

      <div className="cards-div">
        <Card title="Declarative" description="React makes it painless to create interactive UIs." imgSrc={declImg}></Card>
        <Card title="Components" description="Build encapsulated components that manage their state." imgSrc={compImg}></Card>
        <Card title="Single-Way" description="A set of immutable values are passed to the component's." imgSrc={singleImg}></Card>
        <Card title="JSX" description="Statycally-typed, design to run in modern browsers." imgSrc={jsxImg}></Card>
      </div>
    </div>
  );
}

export default App;
