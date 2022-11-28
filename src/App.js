import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureBar from './components/FeatureBar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <FeatureBar/>
    </div>
  );
}

export default App;
