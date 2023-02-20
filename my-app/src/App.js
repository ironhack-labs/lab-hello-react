// src/App.js
import './App.css';
import './styles.css'
import ironLogo from "./images/logoiron.png"
import menuImage from "./images/menu.png"
import declarative from "./images/tool.png"
import component from "./images/compu.png"
import single from "./images/screen.png"
import jsx from "./images/code.png"


function App() {
  return (
    <div className="App">
    
      <nav className= "nav-bar">
        <div className="img-con"><img src={ironLogo} alt="ironhack logo" /></div>
        <div className="img-con"><img src={menuImage} alt= "menu" /></div>
      </nav>

      <section className='first-sec'>
      <div className='first-text'>
        <h1>Say hello to ReactJS</h1>
        <p>You will learn how to use the most popular frontend library, and become a super Ninja developer</p>
        <button>Awesome!</button>
      </div>
      </section>

    <section className='second-sec'>
      <div className='second-container'>
        <div className='elem-container'>
          <img src={declarative}/>
          <h3>Declarative</h3>
          <p className='par'>React makes it painless to create interactive UIs.</p>
        </div>

        <div className='elem-container'>
          <img src={component}/>
          <h3>Component</h3>
          <p className='par'>Build emcapsuled components that manage their state.</p>
        </div>

        <div className='elem-container'>
          <img src={single}/>
          <h3>Single-Way</h3>
          <p className='par'>A set of inmutable values are passed to the component´s.</p>
        </div>

        <div className='elem-container'>
          <img src={jsx}/>
          <h3>JSX</h3>
          <p className='par'>Statically-typed, designed to run on modern browsers.</p>
        </div>
      </div>
    </section>


    </div>

    
  );
}
export default App;
