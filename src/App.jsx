// src/App.jsx
import "./App.css";
import Cards from "./components/Cards";
import Header from "./components/Header";
import Title from "./components/Title";

function App() {
  return (
    <div className="App">
      <div id="hero-section">
        <Header />
        <Title />
      </div>
      <Cards />
    </div>
  );
}

export default App;
