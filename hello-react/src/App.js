import './style.css';
import ironhackLogo from "./images/1.png"
import burger from "./images/2.png"
import gallery1 from "./images/3.png"
import gallery2 from "./images/4.png"
import gallery3 from "./images/5.png"
import gallery4 from "./images/6.png"





function App() {
  return (
    <div className="App">
    
      <div className='nav-div'>
          <nav className='App-nav'>
            <div className="nav-img"><img src={ironhackLogo} alt="ironhack logo"/></div>
            <div className="nav-img"><img src={burger} alt="burger menu"/></div>      
          </nav> 
      </div>
      
      <div className='text-section'>
        <h1>Say hello to ReactJS</h1>
        <p>You will learn to use the most popular frontend library, and become a super Ninja developer.</p>
      <div>
        <a href="#">
          <button className="button">Awesome!</button>
        </a>
      </div>
      </div>

      <div className='gallery'>
        <div className='gallery-element'>
          <div className='gallery-img'><img src={gallery1}/></div>
            <h5>Declarative</h5>
            <p>React makes it painless to create interactive UIs</p>
          </div>
        <div className='gallery-element'>
          <div className='gallery-img'><img src={gallery2}/></div>
            <h5>Components</h5>
            <p>Build encapsulated components that manage their state.</p>
          </div>
        <div className='gallery-element'>
          <div className='gallery-img'><img src={gallery3}/></div>
            <h5>Single Way</h5>
            <p>A set of immutable values are passed to the component's.</p>
          </div>
        <div className='gallery-element'>
          <div className='gallery-img'><img src={gallery4}/></div>
            <h5>JSX</h5>
            <p>Statically-typed, designed to run on modern browsers.</p>
          </div>
      </div>

    </div>
  );
}

export default App;
