import ironhacklogo from './images/ironhack-logo-xs.png'
import menulogo from './images/menu-top-xs.png'
import icon1 from './images/icon1.png'
import icon2 from './images/icon2.png'
import icon3 from './images/icon3.png'
import icon4 from './images/icon4.png'
import './App.css'

function App() {
  return (
    <div>
      <div className='bg-dark'>
        <nav>
          <img src={ironhacklogo} alt='' />
          <img src={menulogo} alt='' />
        </nav>
        <div className='container'>
          <div>
            <h1>Say hello to ReactJs</h1>
            <p>
              You will learn how to use the most popular frontend library, and
              become a Ninja Developer
            </p>
          </div>

          <div>
            <button>Awesome!</button>
          </div>
        </div>
      </div>

      <div className='container-grid'>
        <div className='grid'>
          <div>
            <img src={icon1} alt='' />
            <h3>Declarative</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde,
              totam.
            </p>
          </div>
          <div>
            <img src={icon2} alt='' />
            <h3>Components</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde,
              totam.
            </p>
          </div>
          <div>
            <img src={icon3} alt='' />
            <h3>Single-Way</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde,
              totam.
            </p>
          </div>
          <div>
            <img src={icon4} alt='' />
            <h3>JSX</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde,
              totam.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
