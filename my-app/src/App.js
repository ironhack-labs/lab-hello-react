import Navbar from "./components/Navbar.js"
import Boxes from "./components/Boxes.js"
import Section from "./components/Section.js"
import "./App.css"
function App() {
  return (
    <div className="App">
      <div className="Section1">
        <Navbar />
        <Section />
      </div>
      <div className="Section2">
        <Boxes />
      </div>
    </div>

  );
}

export default App;
