import logo from './logo.svg';
import './App.css';
import ironhackLogo from "../src/images/ironhack-logo-xs.png";
import menuTop from "../src/images/menu-top-xs.png";
import icon1 from "../src/images/icon1.png";
import icon2 from "../src/images/icon2.png";
import icon3 from "../src/images/icon3.png";
import icon4 from "../src/images/icon4.png";
import Card from "./Card";

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <img src={ironhackLogo} alt="logo"/>
        <img className="menu-top" src={menuTop} alt="menu top"/>
      </nav>
      <header className="App-header">
            <h1>Say hello to ReactJS</h1>
            <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
            <button>Awesome!</button>
      </header>
      <div className="Container">
        <Card className="Card" src={icon1} title="Declarative" description="React makes it painless to create interactive UIs." />
        <Card className="Card" src={icon2} title="Components" description="Build encapsulated components that manage their state." />
        <Card className="Card" src={icon3} title="Single-Way" description="A set of immutable values are passed to the component's." />
        <Card className="Card" src={icon4} title="JSX" description="Statically-typed, designed to run on modern browsers." />
      </div>
    </div>
  );
}

export default App;
