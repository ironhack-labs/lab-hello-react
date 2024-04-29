import './App.css'
import logo from "./assets/ironhack-logo-xs.png"; // Import the image file
import menu from "./assets/menu-top-xs.png";
import icon1 from "./assets/icon1.png";
import icon2 from "./assets/icon2.png";
import icon3 from "./assets/icon3.png";
import icon4 from "./assets/icon4.png";
function App() {

  return (
    <>
      <div className='App'>
        <div id="top">
          <img src={logo} alt="logo" className='logo'/>
          <img src={menu} alt="menu" className='menu'/>

          <h1>Say hello to <br /> <span>ReactJS</span></h1>

          <p>You will learn hot to use the most popular frontend library, and become a super Ninja developer.</p>

          <button className='btn'>Awesome!</button>
        </div>

        <div id="bot">
          <section>
            <img src={icon1} alt="1" className='icon' />
            <h3>Declarative</h3>
            <p>React makes it painless to create interactive UIs</p>
          </section>
          <section>
            <img src={icon2} alt="2" className='icon' />
            <h3>Components</h3>
            <p>Build encapsulated components that manage their state.</p>
          </section>
          <section>
            <img src={icon3} alt="3" className='icon' />
            <h3>Single-Way</h3>
            <p>A set of immutable values are passed to the component´s</p>
          </section>
          <section>
            <img src={icon4} alt="4" className='icon' />
            <h3>JSX</h3>
            <p>Statically-typed designed to run on modern browsers.</p>
          </section>
        </div>

      </div>
    </>
  )
}

export default App
