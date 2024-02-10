// src/App.jsx
import './App.css';
import Element2 from './Components.jsx/Element2';
import Element3 from './Components.jsx/Element3';
import Element4 from './Components.jsx/Element4';
import Navbar from './Components.jsx/Navbar';
import Element from './Components.jsx/Element1';


function App() {
  return (
    <>
    <div className="App">
      <Navbar />
      <h1>Say Hello to ReactJS</h1>
      <p>You will learn how to use the most popular frontend library, and become a super Ninja developer</p>
      <button>Awesome!</button>
    </div>

    <div className="elements-div">
    <Element></Element>
    <Element2></Element2>
    <Element3></Element3>
    <Element4></Element4>

    </div>

    </>
  );
}

export default App;
