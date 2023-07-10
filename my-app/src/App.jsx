import './App.css';
import ironhackLogo from './assets/ironhack-logo-xs.png';
import burgerMenuIcon from './assets/menu-top-xs.png';

function App() {
  return (
    <div className="App">
      <header>
        <img src={ironhackLogo} alt="Ironhack logo" />
        <img className="burgerMenu" src={burgerMenuIcon} alt="burger menu" />
      </header>

      <section id="firstSection">
        <h1>Say hello to ReactJS</h1>
        <p>You will learn how to use</p>
        <p>the most popular frontend library,</p>
        <p>and become a super Ninja developer</p>
        <button type="button" className="btn btn-light">
          Awesome!
        </button>
      </section>

      <section id="secondSection">
        <article>
          <img src="./src/assets/icon1.png" alt="Declarative" />
          <h2>Declarative</h2>
          <p>React makes it painless to create interactive UIs.</p>
        </article>

        <article>
          <img src="./src/assets/icon2.png" alt="Components" />
          <h2>Components</h2>
          <p>Build encapsulated components that manage their state.</p>
        </article>

        <article>
          <img src="./src/assets/icon3.png" alt="Single-Way" />
          <h2>Single-Way</h2>
          <p>A set of immutable values are passed to the component's.</p>
        </article>

        <article>
          <img src="./src/assets/icon4.png" alt="JSX" />
          <h2>JSX</h2>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </article>
      </section>
    </div>
  );
}

export default App;
