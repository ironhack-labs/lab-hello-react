// src/App.js
import './App.css';
import React from 'react';
import Encabezado from './components/encabezado'
import Main from './components/main';
import declarative from './images/declarative.png'
import components from './images/components.png'
import singleWay from './images/singleWay.png'
import JSX from './images/jsx.png'
import ironHackLogo from './images/ironHackLogo.png'
import hamburguerMenu from './images/hamburguerMenu.png'
function App() {
  return (
    <div className="App">
		<header className='headerTop'>
       <Encabezado/>
		</header>
		 
     <Main/>
		</div>

  );
}
export default App;