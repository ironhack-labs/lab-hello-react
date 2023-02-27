/* import logo from './logo.svg'; */
import './App.css';
import Headline from './components/Headline';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Headline/>
    <Gallery/>
    </div>
  );
}

export default App;
