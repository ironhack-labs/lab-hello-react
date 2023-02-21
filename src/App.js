// import logo from './logo.svg';
import './App.css';

function App() {


  return (
    <div className="App">
      <div className='Section1'>
        <nav className='App-header'>
          <img src='/images/ironhack-logo-xs.png' alt='logo'></img>

          <img className='menuLogo' src='/images/menu-top-xs.png' alt='menu'></img>
        </nav>

        <div className='divText'>
        <h1>Say Hello to <br></br> ReacJs</h1>
        <p>You will learn how to use <br></br>the most popular frontend library, <br></br>and become a super Ninja developer</p>

        <button><strong>Awesome!</strong></button>
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
