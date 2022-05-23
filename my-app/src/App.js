import "./App.css";
import Navbar from "./components/Navbar";
import Greeting from "./components/Greeting";
import Cards from "./components/Cards";

function App() {
  return (
    <div className="App">
      <main>
        <Navbar />
        <Greeting />
      </main>
      <Cards />
    </div>
  );
}

export default App;
