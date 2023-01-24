import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx"
import Advantages from "./components/Advantages/Advantages.jsx"
import './App.css';
import Button from "./components/Button/Button.jsx";

function App() {
  return (
    <div className="Container">
      <div className="App">
        <Navbar />
        <Hero />
        <Advantages />
      </div>
    </div>
  )
  
}

export default App;
