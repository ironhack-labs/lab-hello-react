import './App.css'
import Navbar from './Components/navbar';
import Landing from './Components/landing';
import Gallery from './Components/gallery';

function App() {
  return (
      <div className="App">
        <Navbar/>
        <Landing/>
        <Gallery/>
      </div>
  );
}

export default App;
