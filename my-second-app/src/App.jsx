// src/App.jsx
import './App.css';
import Awesome from './components/Awesome';
import Images from './components/Images'

function App() {
  return (
    <div className="App">

    <img src = "../assets/ironhack-logo-xs (1).png.png"/>

    <img src = "../assets/menu-top-xs.png"/>

    <h1>Say hello to ReactJS</h1>
      <p>You will learn how to use the most popular frontend library, and become a super Ninja developer</p>

      <Awesome/>

      <Images/>


    </div>
  );
}

export default App;