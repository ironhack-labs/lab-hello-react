// src/App.jsx
import "./App.css";
import herramientaImg from "./assets/herramienta.png";
import computadoraImg from "./assets/computadora.png";
import tornilloImg from "./assets/rueda.png";
import etiquetaImg from "./assets/etiqueta.png";
import Header from "./components/NuevoHeader";

function App() {
  return (
    <div className="App">
      <div id="main-header">
        <Header />
      </div>
      <div id="card-container">
        <div className="card">
          <img src={herramientaImg} alt="herramienta-img" width="80px"/>
          <h3>Declarative</h3>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div className="card">
          <img src={computadoraImg} alt="computadora-img" width="80px"/>
          <h3>Components</h3>
          <p>Build encapsulated components that manage their state</p>
        </div>
        <div className="card">
          <img src={tornilloImg} alt="tornillo-computadora-img" width="80px"/>
          <h3>Single-Way</h3>
          <p>A set of immutable values are passed to the component's.</p>
        </div>
        <div className="card">
          <img src={etiquetaImg} alt="etiqueta-img" width="80px" />
          <h3>JSX</h3>
          <p>Statically-types, designed to run on modern browsers.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
