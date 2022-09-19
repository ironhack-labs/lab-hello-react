import './App.css';
import Header from "./components/Header"
import Navbar from './components/Navbar';
import Info from './components/Info';


function App() {
  return (
    <div className="App">
      <div className="Background">
          <Navbar />
          <Header />
       </div>
      <Info />
    </div>
    
  );
}

export default App;
