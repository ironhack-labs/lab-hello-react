import './App.css';
import Navbar from './components/Navbar.js'
import FirstPart from './components/first-part'
import Features from './components/features'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <FirstPart/>
      <Features/>
    </div>
  );
}

export default App;