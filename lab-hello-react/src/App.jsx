import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Features from './components/Features';

function App() {
  return (
    <div className="App">
      <div className="header">
      <NavBar />
      <Hero />
      </div>
      <Features />
    </div>
  );
}

export default App;
