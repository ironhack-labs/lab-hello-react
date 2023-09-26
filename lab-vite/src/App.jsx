// src/App.jsx
import "./App.css";
import "./index.css";
import HeaderButton from "./headerButton";
import HeaderText from "./headerText";
import NavBar from "./navBar";
import CardTemplate from "./card";

function App() {
  return (
    <>
      <div className="App main-container">
        <div className="HeaderContainer d-flex flex-column mb-3">
          <NavBar />
          <HeaderText />
          <HeaderButton />
        </div>
      </div>
      <div className="card-container d-flex justify-content-evenly">
        <CardTemplate img="/src/assets/icon1.png" title="Declarative" text="React makes it painless to create interactive UIs"/>
        <CardTemplate img="/src/assets/icon2.png" title="Components" text="Build encapsulated components that manage their state."/>
        <CardTemplate img="/src/assets/icon3.png" title="Single-way" text="A set of immutable values are passed to the component's"/>
        <CardTemplate img="/src/assets/icon4.png" title="JSX" text="Statically-typed, designed to run on modern browsers."/>
      </div>
    </>
  );
}

export default App;
