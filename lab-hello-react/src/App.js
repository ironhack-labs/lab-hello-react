import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Hero />
      <Cards></Cards>
    </div>
  );
}

export default App;
