import './App.css';
import { Navbar } from './components/Navbar.jsx'
import { Hero } from './components/Hero.jsx';
import { Cards } from './components/Cards.jsx'

function App() {
  return (
    <div className="App">
      <div className='content-hero'>
        <Navbar/>
        <Hero />
      </div>
      <div>
        <Cards />
      </div>
    </div>
  );
}

export default App;
