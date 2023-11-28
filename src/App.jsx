// src/App.jsx
import './App.css';

import Navbar from './components/navbar/Navbar';
import Middle from './components/middle-bar/MiddleBar';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Middle />
      <Footer />
    </div>
  );
}

export default App;