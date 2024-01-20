import Navbar from "./components/Navbar/Navbar";
import List from "./components/List/List";
import Headline from "./components/Headline/Headline";

// src/App.jsx
import "./App.css";

function App() {
  return (
    <div className="App">
      <main>
        <Navbar />
        <Headline />
      </main>

      <List />
    </div>
  );
}

export default App;
