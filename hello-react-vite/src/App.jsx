// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


import './App.css';
import logo from './assets/logo.png'
import menu from './assets/menu.png'
import icon1 from './assets/icon1.png'
import icon2 from './assets/icon2.png'
import icon3 from './assets/icon3.png'
import icon4 from './assets/icon4.png'
import Button from './components/button/Button';

function App() {
  return (
    <div className="App">
      <header>
        <div className='container'>
          <nav>
            <a href="/"><img src={logo} alt="" /></a>
            <img src={menu} alt="" />
          </nav>
          <div className='title-wrapper'>
            <h1 className='title'>Say hello to ReactJS</h1>
            <p className='subtitle'>
              You will learn how to use the most popular frontend library, and become a super Ninja developer.
            </p>
            <Button text='Awesome!' />
          </div>
        </div>
      </header>
      <div>
      </div>
      <main>
        <div className='container'>
          <ul className='main-list'>
            <img src={icon1} alt="" />
            <h2>
              Declarative
            </h2>
            <p>
              React makes it painless to create interactive UIs.
            </p>
            <img src={icon2} alt="" />
            <h2>
              Components
            </h2>
            <p>
              Build encapsulated components that manage their state.
            </p>
            <img src={icon3} alt="" />
            <h2>
              Single-Way
            </h2>
            <p>
              A set of immutable values are passed to the component's.
            </p>
            <img src={icon4} alt="" />
            <h2>
              JSX
            </h2>
            <p>
              Statically-typed, designed to run on modern browsers.
            </p>
          </ul>
        </div>
      </main>
    </div>


  );
}

export default App;
