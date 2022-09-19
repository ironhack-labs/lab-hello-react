/* import logo from './logo.svg'; */
import "./App.css";

import Navbar from "./components/Navbar";
import Headline from "./components/Headline";
import Button from "./components/Button";

import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";

function App() {
  return (
    <div className="App">
      <div className="top">
        <Navbar />
        <section className="main">
          <Headline />
          <Button className="btn" />
        </section>
      </div>

      <article>
        <div className="container">
          <img src={icon1} alt="icon 1"></img>
          <h2>Declarative</h2>
          <p>
            React makes it<br></br>
            painless to create<br></br> interactive UIs
          </p>
        </div>
        <div className="container">
          <img src={icon2} alt="icon 2"></img>
          <h2>Components</h2>
          <p>
            Build encapsulated<br></br>
            components that <br></br>
            manage their state
          </p>
        </div>
        <div className="container">
          <img src={icon3} alt="icon 3"></img>
          <h2>Single-Way</h2>
          <p>
            A set of immutable<br></br>
            values are passed to <br></br>
            the components
          </p>
        </div>
        <div className="container">
          <img src={icon4} alt="icon 4"></img>
          <h2>JSX</h2>
          <p>
            Statically-typed,<br></br>
            designed to run on <br></br>
            modern browsers
          </p>
        </div>
      </article>
    </div>
  );
}

export default App;
