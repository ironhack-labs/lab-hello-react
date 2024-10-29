// src/App.jsx
import './App.css';
import Cards from './components/Cards';
import Content from './components/Content';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <div className='main'>
        <Navbar/>
        <Content/>
      </div>
      <Cards></Cards>
    </div>
  );
}

export default App;