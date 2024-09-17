import './App.css';
import Navbar from './components/Navbar';
import Headline from './components/Headline';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="App">
      <div className="section">
        <Navbar/>
        <Headline/>
      </div>
      <Gallery />
    </div>
  );
}

export default App;
