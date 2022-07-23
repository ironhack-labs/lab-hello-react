// src/App.js
import './App.css';
import Hero from './components/Hero';
import Main from './components/Main';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <Main/>
    </>
  )
}

export default App;