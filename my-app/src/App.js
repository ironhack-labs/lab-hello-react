// src/App.js
import "./App.css";
import { Header } from "./components/Header";
import icon1 from "./images/icon1.png"
import icon2 from "./images/icon2.png"
import icon3 from "./images/icon3.png"
import icon4 from "./images/icon4.png"

function App() {
  return (
    <div className="App">
      <header>
        <Header/>
      </header>
      <section className="mainSection">
        <h1>Say hello to ReactJS</h1>
        <h3>You will learn to use the most popular frontend library, and become a super Ninja developer.</h3>
        <button>Awesome!</button>
      </section>
      <section className="bottomSection">
        <div className="block">
          <img src={icon1} alt="Declarative symbol"></img>
          <h2>Declarative</h2>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div className="block">
          <img src={icon2} alt="Components symbol"></img>
          <h2>Components</h2>
          <p>Build encapsulated components that manage their state.</p>
        </div>
        <div className="block">
          <img src={icon3} alt="Single-Way symbol"></img>
          <h2>Single-Way</h2>
          <p>A set of immutable values are passed to the components.</p>
        </div>
        <div className="block">
          <img src={icon4} alt="JSX symbol"></img>
          <h2>JSX</h2>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
      </section>
    </div>
  );
}
export default App;
