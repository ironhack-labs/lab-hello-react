// src/App.js
import Navbar from "./components/Navbar/Navbar.jsx"
import Main from "./components/Main/Main.jsx"
import CardHolder from "./components/CardHolder/CardHolder.js";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <CardHolder />
    </div>
  );
}
export default App;