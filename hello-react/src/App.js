import logo from './logo.svg';
import './App.css';

  function App() {
  
  return (
    
    <div className="App">
    <div className="arriba">
    <div className="background">
     <nav className="App-header">
      <img  src="/images/ironhack-logo-xs.png"/>
      <img src="/images/menu-top-xs.png"/>
     </nav>
      
      <div className="left">
      <h1>Say Hello to ReactJs</h1>
      <p className="p">You will learn how to use <br/>the mos popular frontend library, <br/>and become a super Ninja developer </p>
      <button>Awesome!</button>
      </div>
      </div>
      </div>
    
      
      <div className='cards'>

      <div>
      <img src='/images/icon1.png'></img>
      <h3>Declarative</h3>
      <p>React makes it <br></br> painless to create <br></br> interactive UIs.</p>
      </div>

     <div>
      <img src='/images/icon2.png'></img>
      <h3>Components</h3>
      <p>Build encapuslated <br></br> components that <br></br> manage their state.</p>

     </div>

     <div>
      <img src='/images/icon3.png'></img>
      <h3>Single-Way</h3>
      <p>A set of immutable <br></br> valuse ara passed to <br></br> the component's.</p>

     </div>

     <div>
      <img src='/images/icon4.png'></img>
      <h3>JSX</h3>
      <p>Statically-typed <br></br> designed to run on <br></br> modern browsers.</p>
     </div>
     </div>
    
    </div>
  );
}

export default App;
