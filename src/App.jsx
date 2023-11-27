
// src/App.jsx
import './App.css';
import React from "react";
import Navbar from "./components/Navbar";
import Headline from "./components/Headline";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Headline />
      <Gallery />
    </div>
  );
}

export default App;