import "./App.css";
import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";
import ironhackLogoXs from "./images/ironhack-logo-xs.png";
import menuTopXs from "./images/menu-top-xs.png";

function App() {
  return (
    <div className="App">
      <div>
        <nav>
          <img src={ironhackLogoXs} alt="Ironhack logo" />
          <img src={menuTopXs} alt="menu icon" />
        </nav>
        <main>
          <h1>Say hello to ReactJS</h1>
          <p>
            You will learn to use the most popular frontend library, and become
            a super Ninja developer.
          </p>
          <button type="button">Awesome!</button>
        </main>
      </div>

      <div>
        <img src={icon1} alt="" />
        <h2>Declarative</h2>
        <p>React makes it painless to create interactive UIs.</p>
      </div>
      <div>
        <img src={icon2} alt="" />
        <h2>Components</h2>
        <p>Build encapsulated components that manage their state.</p>
      </div>
      <div>
        <img src={icon3} alt="" />
        <h2>Single-Way</h2>
        <p>A set of immutable values are passed to the component's.</p>
      </div>
      <div>
        <img src={icon4} alt="computer icon with a code written on a window" />
        <h2>JSX</h2>
        <p>Statically-typed, designed to run on modern browsers.</p>
      </div>
    </div>
  );
}

export default App;
