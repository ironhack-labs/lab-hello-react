// src/App.jsx
import "./App.css";
import icon1 from "./assets/images/icon1.png";
import icon2 from "./assets/images/icon2.png";
import icon3 from "./assets/images/icon3.png";
import icon4 from "./assets/images/icon4.png";
import Header from "./components/Header";
import Functionality from "./components/Functionality";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="list-functionalities">
        <Functionality
          imageSrc={icon1}
          title={"Declarative"}
          text={"React makes it painless to create interactive UIs."}
        ></Functionality>
        <Functionality
          imageSrc={icon2}
          title={"Components"}
          text={"Build encapsulated components that manage their state."}
        ></Functionality>
        <Functionality
          imageSrc={icon3}
          title={"Single-Way"}
          text={"A set of immutable values are passed to the component's"}
        ></Functionality>
        <Functionality
          imageSrc={icon4}
          title={"JSX"}
          text={"Statically-typed, designed to run on modern browsers."}
        ></Functionality>
      </div>
    </div>
  );
}

export default App;
