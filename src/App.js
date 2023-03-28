
import './App.css';
import Navbar from './components/Navbar';
import Greeting from './components/Greeting';
import Button from './components/Button';
import Categories from './components/Categories'

function App() {
  return (
    <div className="App">
    <div className="dark-background">
    <Navbar />
    <Greeting />
    <Button />
    </div>
    <Categories />

    </div>
  );
}

export default App;
