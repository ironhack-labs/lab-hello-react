import './App.css';
import Navbar from "./components/Navbar";
import Button from './components/Button';
import Gallery from './components/Gallery';
import Headline from './components/Headline';
import Subheadline from './components/Subheadline';

function App() {
  return (
    <div className="App">
  <Navbar />

<div id="left">
  <div className="top">
    <Headline />
    <Subheadline />
    <Button />
  </div>
</div>

<div className="bottom">
  <Gallery />
</div>







    </div>
  );
}

export default App;
