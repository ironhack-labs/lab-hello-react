//import logo from './logo.svg';
import './App.css';
import Navbar from "./Navbar";
import LogoIron from "./components/LogoIron";
import SideBar from "./components/SideBar";
import IconOne from "./components/IconOne";
import IconTwo from "./components/IconTwo";
import IconThree from "./components/IconThree";
import IconFour from "./components/IconFour";


function App() {
  return (
    <div className="App">
      <div className="blue-square" alignItems="center">
        <div className="container-navbar">
          <LogoIron />
          <SideBar />
        </div>
        <Navbar />
      </div>
      <div className="white-square">
        <IconOne />
        <IconTwo />
        <IconThree />
        <IconFour />
      </div>

    </div>

  );
}

export default App;
