import './App.css';
import Navbar from "./components/Navbar/Navbar.jsx"
import Advantages from './components/Advantages/Advantages';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero/>
      <Advantages/>
    </div>
  );
}

export default App;
