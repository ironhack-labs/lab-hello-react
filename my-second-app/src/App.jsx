// src/App.jsx

import './App.css';
import Awesome from './components/Awesome';
import Images from './components/Images';
import ironhacklogo from './assets/ironhacklogo.png';
import menutop from './assets/menutop.png';


function App() {
  return (
    <div className="App">

    <div id = "main">
      
        <div className="top">
          <img src = {ironhacklogo} className="logo"/>

          <img src = {menutop} className="menu"/>
        </div>

      <div className="hero">
      <h1>Say hello to ReactJS</h1>
      <p className="intro">You will learn how to use the most popular frontend library, and become a super Ninja developer</p>

      <Awesome/>
      </div>

      
    </div>

    <Images/>
    

    </div>
  );
}

export default App;