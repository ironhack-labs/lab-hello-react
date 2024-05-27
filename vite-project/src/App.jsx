import './App.css';
import logo from './assets/ironhack-logo-xs.png';
import menu from './assets/menu-top-xs.png';
import icon1 from './assets/icon1.png';
import icon2 from './assets/icon2.png';
import icon3 from './assets/icon3.png';
import icon4 from './assets/icon4.png';

function App() {
    return(
      <div className='App'>
        <header>
          <div id='navbar'>
            <img src={logo} alt="Ironhack Logo" id='logo'/>
            <img src={menu} alt="Menu" id='menu'/>
          </div>
          <div id='header-content'>
            <h1>Say hello to ReactJS</h1>
            <p>You will learn how to use the most popular frontend library, 
            and become a super Ninja developer.</p>
            <button >Awesome!</button>
          </div>
        </header>

       <div className='main-content'>
            <div>
              <img src={icon1} alt="Icon 1" />
              <h3>Declarative</h3>
              <p>React makes it painless to create interactive UIs.</p>
            </div>
            <div>
              <img src={icon2} alt="Icon 2" />
              <h3>Components</h3>
              <p>Build encapsulated components that manage their state.</p>
            </div>
            <div>
              <img src={icon3} alt="Icon 3" />
              <h3>Single-Way</h3>
              <p>A set of immutable values are passed to the component's.</p>
            </div>
            <div>
              <img src={icon4} alt="Icon 4" />
              <h3>JSX</h3>
              <p>statically-typed, designed to run on modern browsers.</p>
            </div>
       </div>
        

      </div>
    );
}
 export default App;
























