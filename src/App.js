import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Info from './components/Info';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Header/>
      <Info/>
    </div>
  );
}

export default App;
