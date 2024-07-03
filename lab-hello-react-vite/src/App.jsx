// src/App.jsx
import './App.css';
import Banner from "./Banner";
import Header from "./Header";
import logo from "./assets/ironhack-logo-xs.png";
import menuLogo from "./assets/menu-top-xs.png";
import Icon1 from "./assets/icon1.png"
import Icon2 from "./assets/icon2.png"
import Icon3 from "./assets/icon3.png"
import Icon4 from "./assets/icon4.png"
import Iconbox from './Iconbox';

function App() {
  return (
    <div className="App">
      <Header logo={logo} menuLogo={menuLogo} />
      <Banner />
      <Iconbox icon1={Icon1} icon2={Icon2} icon3={Icon3} icon4={Icon4} menuLogo={menuLogo} />
    </div>
  );
}

export default App;