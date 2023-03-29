import logo from './logo.svg';
import './App.css';
import Awebutton from './components/Awebutton';
import Headline from './components/Headline';
import Subheading from './components/Subheading';
import Navbar from './components/Navbar';
import Imageheads from './components/Imageheads';
import Images from './components/Images';
import Imagetext from './components/Imagetext';


function App() {
  return (
    <div className="App">
      <div id="header">
        <Navbar />
        <Headline />
        <Subheading />
        <Awebutton />
      </div>
      <div id="body-div" class="container">
        <Images />
        <Imageheads />
        <Imagetext />
      </div>
    </div>
  );
}

export default App;
