import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Logo from "./components/Logo";
import Navbar from "./components/Navbar";
import Headline from "./components/Headline";
import Button from "./components/Button";
import Gallery from "./components/Gallery";
import "./index.css";

//style={{ backgroundImage: `url(${reactLogo})`}}

function App() {
  return (
    <>
      <div className="App">
        <div className="topSection">
          <Logo />
          <Navbar />
          <Headline />
          <Button />
        </div>
        <div className="gallerySection">
          <Gallery />
        </div>
      </div>
    </>
  );
}

export default App;
