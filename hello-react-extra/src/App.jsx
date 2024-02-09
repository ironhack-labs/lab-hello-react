import ihLogo from './assets/ironhack-logo-xs.png'
import menuNav from './assets/menu-top-xs.png'
import icon1 from './assets/icon1.png'
import icon2 from './assets/icon2.png'
import icon3 from './assets/icon3.png'
import icon4 from './assets/icon4.png'

import './App.css'

function App() {

  return (


    <div className="App">

      <nav className='nav-bar'>

        <img className="logo-bar" src={ihLogo} alt="ihLogo" />
        <img className='nav-menu' src={menuNav} alt="navMenu" />

      </nav>
      <section className='main-section'>

        <h1>Say Hello to React tuku tuku</h1>

        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid dolore ex placeat accusamus iure non! Qui doloribus, ullam minus est provident ratione molestias ex dolore, debitis obcaecati consequuntur explicabo rem.</p>

        <button>Awesome</button>

      </section>

      <footer className='footer'>
        <ul>
          <li>
            <img src={icon1} alt="icon1" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis fugit id inventore. Omnis debitis aut enim sunt illo blanditiis odit quibusdam culpa reprehenderit tempora, ducimus consectetur quaerat laudantium voluptatum itaque!</p>
          </li>

          <li>
            <img src={icon2} alt="icon2" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut id veritatis dignissimos odio esse quia eaque quidem ullam hic provident molestias error assumenda repudiandae nihil dolore non, animi quae dicta!</p>
          </li>
          <li>
            <img src={icon3} alt="icon3" />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus delectus qui ipsam incidunt enim quod, ratione modi maxime atque dolor deleniti excepturi quos nemo veritatis quasi reprehenderit porro ducimus.</p>
          </li>
          <li>
            <img src={icon4} alt="icon4" />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates ipsum aliquid eius, assumenda quo vel debitis? Doloribus, eos! Rerum nesciunt, ratione repellendus ad natus molestias placeat maiores vitae consequatur accusantium?</p>
          </li>
        </ul>
      </footer>
    </div>
  )

}

export default App
