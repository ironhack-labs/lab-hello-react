import "./App.css";
import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import Features from "./components/Features";

function App() {
  return (
    <div className="App">
      <div className="First-module">
        <Navbar />
        <Introduction />
      </div>
      <Features />
    </div>
  );
}

export default App;
