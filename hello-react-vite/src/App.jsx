import logo from "./assets/1.png";
import declarative from "./assets/2.png";
import singleway from "./assets/4.png";
import components from "./assets/3.png";
import jsx from "./assets/5.png";
import menu from "./assets/menu.png";

import "./App.css";

function App() {
  return (
    <div className="App">
      
      <header>
      
      <div>
      <nav>
        <img src={logo} alt="logo" />
        <img src={menu} alt="logo" />
      </nav>
        <h1>Say hello to ReactJS</h1>
        <p>
          You will lean how to use the most popular frontend library and become
          a super Ninja developer
        </p>
        <button>Awesome!</button>
        </div>
      </header>
      <section>
        <div>
          <img src={declarative} alt="logo" />
          <h3>Declarative</h3>
          <p>React makes it painless to create interactive UIs </p>
        </div>
        <div>
          <img src={components} alt="logo" />
          <h3>Components</h3>
          <p>Build encapsulated componentas that manage their state </p>
        </div>
        <div>
          <img src={singleway} alt="logo" />
          <h3>Single-way</h3>
          <p>A set of immutable values are passed to the component's </p>
        </div>
        <div>
          <img src={jsx} alt="logo" />
          <h3>JSX</h3>
          <p>statically-typed,designned to run on modern browsers </p>
        </div>
      </section>
    </div>
  );
}

export default App;
