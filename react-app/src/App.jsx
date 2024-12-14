// src/App.jsx
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Segments from "./components/Segments";

function App() {
  return (
    <div className="App">
      <div className="header">
        <Navbar />
        <Hero />
      </div>
      <Segments />
    </div>
  );
}

export default App;
