import "./App.css";
import Nav from "./components/Nav";
import MainText from "./components/MainText";
import Icons from "./components/Icons";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <MainText />
      </header>
      <main>
        <Icons />
      </main>
    </div>
  );
}

export default App;
