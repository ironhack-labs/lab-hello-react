// src/App.js
import './App.css';
import React from 'react';
import ironhachLogo from './images/ironhack-logo-xs.png';
import menuTop from './images/menu-top-xs.png';
import declarative from './images/icon1.png';
import components from './images/icon2.png';
import singleWay from './images/icon3.png';
import jsx from './images/icon4.png';


function App() {
    return ( <
        div className = "App" >
        <
        header className = "App-header" >
        <
        img src = { ironhachLogo }
        className = "App-logo"
        alt = "logo" / >
        <
        img src = { menuTop }
        className = "App-logo"
        alt = "logo" / >
        <
        h1 > Say hello to ReactJS < /h1> <
        p > You will learn a Frontend framework from scratch, to become a Ninja Developer < /p> <
        button > Awesome! < /button> < /
        header > <
        /div> 






    );
}



export default App;