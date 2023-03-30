import Navbar from "./components/Navbar";
import Headline from "./components/Headline";
import Button from "./components/Button";
import Gallery from "./components/Gallery";
import './App.css';

function App() {
  return (
    <div className="App">
    <div className="background">
      <Navbar />
      <Headline />
      <Button />
    </div>
    <div>
    <Gallery />
     </div>
    </div>
  );
}



export default App;






