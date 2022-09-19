import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav"
import Hero from './components/Hero';
import Details from './components/Details';

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Details />
    </div>
  );
}

export default App;
