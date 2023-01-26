import Navbar from './content/Navbar/Navbar.jsx';
import Title from './content/Title/Title.jsx';
import './App.css';
import Buttonawesome from './content/Button-awesome/Button.jsx';
import Benefits from './content/React-beneficts/Benefits.jsx';


function App() {
  return (
    <div>
          <div className="Container">
    <div className="App">

      <Navbar/>
      <Title/>
      <Buttonawesome/>

    </div>

    </div>
    <Benefits/>
    </div>
  );
}

export default App;
