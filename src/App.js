import './App.css';
import Navbar from './components/Navbar'
import Gallery from './components/Gallery'
import Intro from './components/Intro'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Gallery />
    </div>
  );
}

export default App;
