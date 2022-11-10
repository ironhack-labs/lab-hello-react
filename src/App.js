import logo from './logo.svg';
import './App.css';
import Ironhack from "./images/ironhack-logo-xs.png"
import Menu from "./images/menu-top-xs.png"

function App() {
  return (
    <div className="App">
      <div className='Main'>
        <img src={Ironhack} alt="horse" />
        <img id='menu'src= { Menu } alt="menu" />
          
          <h1>Say hello to ReactJS</h1>
      </div>
    </div>

  );
}

export default App;
