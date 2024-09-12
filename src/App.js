
import './App.css';
import logotipo from "./images/ironhack-logo-xs.png";
import menus from "./images/menu-top-xs.png";
import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";

function App() {
  return (
    <main className="App">
      <section className="top">
        <nav>
          <img src={logotipo} alt=""/>
          <img src={menus} alt=""/>
        </nav>

        <div className="text-top">
          <h1>Say hello to ReactJS</h1>
          <p>
            You will learn how to use the most popular Frontend library, and become a Super Ninja Developer
          </p>
          <button>AWESOME!</button>
        </div>
      </section>

      <section className="Characteristics">
        <article>
          <img src={icon1} alt=""/>
          <h3> Declarative</h3>
          <p>React makes it painless to create interactive UIs.</p>
        </article>

        <article>
          <img src={icon2} alt=""/>
          <h3> Components</h3>
          <p>Build encapsulated components that manage their state.</p>
        </article>

        <article>
          <img src={icon3} alt=""/>
          <h3> Single-Way</h3>
          <p>A set of immitable values are passed to the component's.</p>
        </article>

        <article>
          <img src={icon4} alt=""/>
          <h3> JSX</h3>
          <p>Statically typed,designed to run on modern browsers.</p>
        </article>
      </section>
    </main>
  );
}

export default App;
