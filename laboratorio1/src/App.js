import './App.css';
import Navbar from './components/navbar/Navbar';
import Portada from './components/portada/Portada';
import Body from './components/body/Body';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Portada/>
    <Body/>
    </div>
  );
}

export default App;
