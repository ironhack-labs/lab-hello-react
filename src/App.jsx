// src/App.jsx
import Benefits from '../components/Benefits';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <div id='topSection'>
      <Navbar />
      <Header />
      </div>
      <Benefits />
    </div>
  );
}

export default App;