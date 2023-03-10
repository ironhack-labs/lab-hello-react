// src/App.js
import './App.css';
import Body from './components/body';
import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Body />
    </div>
  );
}
export default App;