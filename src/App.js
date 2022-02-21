// src/App.js
import "./App.css";
import Navbar from "./components/Navbar.js";
import Section1 from "./components/Section1.js";
import Section2 from "./components/Section2.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Section1 />
      <Section2 />
    </div>
  );
}
export default App;
