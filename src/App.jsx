import "./App.css";
import Card from "./components/Card/Card";
import ReactLogo from "./assets/react.svg";


function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="navbar">
          <img src="../src/assets/ironhack-logo-xs.png" alt="Ironhack Logo" />
          <img src="../src/assets/menu-top-xs.png" alt="Top Menu Navigation Icon"/>
        </div>
        <section className="start">
          <h1 className="main-hl">Say hello to ReactJS</h1>
          <h2 className="subtext">
            You will learn how to use the most popular frontend library, and
            become a super Ninja developer.
          </h2>
          <button className="main-cta">Awesome!</button>
        </section>
        <div className="spinning-logo">
          <img src={ReactLogo} alt="Spinning React Logo" className="logo-img" />
        </div>
      </header>
      <section className="cards">
        <Card
          image="../src/assets/icon1.png"
          headline={"Declarative"}
          text={"React makes it painless to create interactive UIs."}
        />
        <Card
          image="../src/assets/icon2.png"
          headline={"Components"}
          text={"Build encapsulated components that manage their state."}
        />
        <Card
          image="../src/assets/icon3.png"
          headline={"Single-Way"}
          text={"A set of immutable values are passed to the components."}
        />
        <Card
          image="../src/assets/icon4.png"
          headline={"JSX"}
          text={"Statically typed, designed to run on modern browsers."}
        />
      </section>
    </div>
  );
}

export default App;