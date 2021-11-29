// src/App.js
import './App.css'
import logo from './images/ironhack-logo-xs.png'
import menu from './images/menu-top-xs.png'
import icon1 from './images/icon1.png'
import icon2 from './images/icon2.png'
import icon3 from './images/icon3.png'
import icon4 from './images/icon4.png'

function App() {
  return (

    <div className='app'>

      <div className='nav'>
        <img src={logo} alt='' />
        <img src={menu} alt='' />
      </div>

      <div className='text-area'>
        <div>
          <h1>Say hello to ReactJs</h1>
          <p>
            You will learn how to use the most popular frontend library, and
            become a Ninja Developer
          </p>
          <div>
            <button>Awesome!</button>
          </div>
        </div>
      </div>

      <div className='container-area'>
        <div className='container-grid'>
          <div>
            <img src={icon1} alt='' />
            <h3>Declarative</h3>
            <p>
              React makes it painless to create ...
            </p>
          </div>
          <div>
            <img src={icon2} alt='' />
            <h3>Components</h3>
            <p>
              React makes it painless to create ...
            </p>
            <div>
              <img src={icon3} alt='' />
              <h3>Single-Way</h3>
              <p>
                React makes it painless to create ...
              </p>
            </div>
            <div>
              <img src={icon4} alt='' />
              <h3>JSX</h3>
              <p>
                React makes it painless to create ...
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>

  )
}


export default App;
