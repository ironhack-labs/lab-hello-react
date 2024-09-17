// src/App.jsx
import Header from './components/Header.jsx';
import Body from './components/Body.jsx';
import Navbar from'./components/Navbar.jsx';
import './App.css';

function App() {
  return (
    <div>
      <Navbar/>
      <Header />
      <Body />
    </div>
  );
}

export default App;