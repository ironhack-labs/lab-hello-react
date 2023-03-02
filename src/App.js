import './App.css';
import Navbar from "./components/Navbar"; 
import Headline from './components/Headline';
import Declarative from './components/Declarative';
import Components from './components/Components';
import SingleWay from './components/SingleWay';
import Jsx from './components/Jsx';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Headline />
      <div className='section-two'>
        <Declarative />
        <Components />
        <SingleWay />
        <Jsx />
      </div>
    </div>
  );
}

export default App;
