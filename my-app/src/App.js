import "./App.css";
import Navbar from "./components/Navbar";
import Headline from "./components/Headline";
import Cards from "./components/Cards";

function App() {
  return (
    <div className="App">
      <header id="header">
        <Navbar />

        <Headline />
      </header>
      <section id="cards">
        <Cards />
      </section>
    </div>
  );
}

export default App;
