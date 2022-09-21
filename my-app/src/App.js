
import './App.css';
import Headline from './components/Headline/Headline';
import Navbar from "./components/Navbar/Navbar";
import Button from './components/Button/Button';
import Card from './components/Card/Card';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Headline />

      <Card />

    </div>
  );
}

export default App;
