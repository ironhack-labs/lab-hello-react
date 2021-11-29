// src/App.js
import './App.css';

import logoIronhack from "./images/ironhack-logo-xs.png"
import menu from "./images/menu-top-xs.png"
import icon1 from "./images/icon1.png"
import icon2 from "./images/icon2.png"
import icon3 from "./images/icon3.png"
import icon4 from "./images/icon4.png"


const headerStyle = {
    height: '50%',
    'background-color': 'black',
}
const navStyle = {
    display: 'flex',
    'justify-content': 'space-between',
    'align-items': 'center',
    'align-content': 'center',
    margin: '10px',
    padding: '10px',
}
const appStyle = {
    display: 'flex',
    width: '100%',
    'align-content': 'center',
    'justify-content': 'center',
    'align-items': 'center',
}
const aStyle = {
    'background-color': 'white',
    color: 'black',
    padding: '6px',
    'border-radius': '3px',
    'text-decoration': 'none'
}
const contentStyle = {
    width: '15%',
    'text-align': 'left',
    margin: '30px',
}

function App() {
    return (
        <>
            <header style={headerStyle}>
                <nav style={navStyle}>
                    <img src={logoIronhack}/>
                    <img src={menu}/>
                </nav>
                <div style={{padding: '1rem', width: '35%'}}>
                    <h1 style={{color: 'white', 'font-size': '3rem'}}> Say Hello to ReactJS
                    </h1>
                    <p style={{color: 'white'}}> You will learn how to use the mose popular frontend
                        library, and become a super Ninja developer.</p>
                    <a href='#' style={aStyle}>Awesome!</a>
                </div>
            </header>
            <div className="App" style={appStyle}>
                <div className="content-wrapper" style={contentStyle}>
                    <img src={icon1}/>
                    <h2>Declarative</h2>
                    <p> React makes it painless to create interactive UIs.</p>
                </div>

                <div className="content-wrapper" style={contentStyle}>
                    <img src={icon2}/>
                    <h2>Components</h2>
                    <p> build encapsulated components that manage their state</p>
                </div>

                <div className="content-wrapper" style={contentStyle}>
                    <img src={icon3}/>
                    <h2>Single-Way</h2>
                    <p> A set of immutable values are passed to the component's.</p>
                </div>

                <div className="content-wrapper" style={contentStyle}>
                    <img src={icon4}/>
                    <h2>JSX</h2>
                    <p> Statically-typed. Designed to run on modern browsers.</p>
                </div>

            </div>
        </>
    )
        ;
}

export default App;