import './App.css';
import icon1 from "./images/icon1.png"
import icon2 from "./images/icon2.png"
import icon3 from "./images/icon3.png"
import icon4 from "./images/icon4.png"
import ih from "./images/ih.png"
import menu from "./images/menu.png"

function App() {
  return (
    <div className="App">
      <div className='icono'><img src={ih}/></div>
      <div className='menu'><img src={menu}/></div>
      <h1>Say hello to</h1>
      <h1 className='principal'>ReactJS</h1>
      <div className='dos'>
      <h3>You will learn how to use</h3>
      <h3>the most popular frontend library</h3>
      <h3>and become a super Ninja developer</h3>
      </div>
      <div className="icono1">
      <img src={icon1}/>
      </div>
      <h2>Declarative</h2>
      <div className='texto1'>
      <p>
        React makes it </p>
        <p>paineless to create</p>
       <p>interactive Uls.</p> 
      </div>
  

      <div className="icono2">
      <img src={icon2}/>
      </div>
      <h2>Components</h2>
      <div className='texto2'>  
      <p>Build encapsulated</p>
       <p>Components that </p> 
       <p>manage their state.</p> 
      </div>

      <div className="icono3">
      <img src={icon3}/>
      </div>
      <h2>Single-Way</h2>
      <div className='texto3'>
      <p>A set of immutable</p>
        <p>values are passed to</p>
       <p> the components.
      </p>
      </div>
      

      <div className="icono4">
      <img src={icon4}/>
      <h2 className='titulo0'>JSX</h2>
      <div className='texto4'>
      <p>Statically-typed, </p>
       <p> designed to run on</p>
        <p>modern browsers.
      </p>
      </div>
      </div>
      <div className='boton'><button>Awesome!!!</button></div>
    </div>
  );
}
export default App;