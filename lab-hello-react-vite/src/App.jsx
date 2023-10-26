// src/App.jsx
import "./App.css";
import Navbar from "./components/Navbar";
import Headline from "./components/Headline";
import Button from "./components/Button";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div className="App">
      <div className="topSection">
        <Navbar />
        <Headline />
        <Button />
      </div>
      <div className="gallerySection">
        <Gallery />
      </div>
    </div>
  );
}

export default App;
