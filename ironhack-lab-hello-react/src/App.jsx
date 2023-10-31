// src/App.jsx
import './App.css';
import NavBar from './Components/NavBar/Navbar';
import Descriptions from './Components/Descriptions';

function App() {
  return (
    <div className="App" id = "App">
      <div id = "App">
      <NavBar/>
      <div id = "appBody">
      <h1>Say Hello to <br/>ReactJS</h1>
       <p>You will learn how to use <br/> React to become a great developer</p>
       <button>Awesome!</button>
      </div>
      </div>
      <div>
        <Descriptions/>
      </div>

    </div>
  );
}

export default App;