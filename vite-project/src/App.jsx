// src/App.jsx
import './App.css';
import NavBar from './Components/NavBar';
import Intro from './Components/Intro';
import FourSlot from './Components/Articles';

function App() {
  return (

    <div className="App">
      <NavBar />
      <Intro />
      <FourSlot />
    </div>
  );
}

export default App;