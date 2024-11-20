import './App.css'; 
import icon1 from './images/icon1.png'; 
import icon2 from './images/icon2.png'; 
import icon3 from './images/icon3.png'; 
import icon4 from './images/icon4.png'; 
import menu from './images/menu-top-xs.png';
import ironhack from './images/ironhack-logo-xs.png'; 

function App() { 
  return (
    <div className="App">
      <header>
        <div id="menu">
          <img src={ironhack} alt="ironhack-logo"/> 
          <img src={menu} alt="menu-logo"/>
        </div>

        <div id="title">
          <h1>Say hello to <br></br>ReactJS</h1>
          <p>You will learn hot to use <br></br>the most popular 
          frontend library,<br></br> and become a super Ninja 
          developer.</p>
          <button type="button">Awesome!</button>
        </div> 
      </header> 

      <article id="items" className='items'>
        <div className='item'>
          <img src={icon1} alt="declarative"></img>
          <h2>Declarative</h2>
          <p>React makes it<br></br> painless to create<br></br>
          interactive UIs.</p>
        </div>
        <div className='item'>
        <img src={icon2} alt="components"></img> 
          <h2>Components</h2> 
          <p>Build encapsulated<br></br> components that<br></br>
          manage their state.</p>
        </div>
        <div className='item'>
          <img src={icon3} alt="singleWay"></img> 
          <h2>Single-Way</h2>
          <p>A set of immutable<br></br> values are passed
          to<br></br> the components.</p>
        </div>
        <div>
          <img src={icon4} alt="jsx"></img> 
          <h2>JSX</h2>
          <p>Statically-typed,<br></br> designed to run 
          on<br></br> modern browsers.</p>
        </div>
      </article>
      
    </div> 
  );
}

export default App;
