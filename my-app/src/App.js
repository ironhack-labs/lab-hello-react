// src/App.js
import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Bottom from './bottom';

function App() {
  return (
    <>
    <div className='App'>
     <Navbar/>
    <h1 className="Hello">
          Say hello to
      <h2>ReactJS</h2>
    </h1>
    
    <p className='p1'>
    <p>You will lear how to use the</p> <p>most popular frontend library,</p> <p>and become a super Ninja developer</p>    
    </p>
    
    <h2 className='button'>Awesome!</h2>  

    </div>
      <Bottom/>
    </>


  );
}
export default App;