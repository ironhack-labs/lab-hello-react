import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Cards from './components/Cards';


function App() {
  return (
    <div className="App">
      <div className="main">
        <Navbar />
        <Main />
      </div>
      <div className="footer">
        <Cards/>
      </div>
      
    </div>
  );
}



export default App;
