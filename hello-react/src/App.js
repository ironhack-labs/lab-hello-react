import logo from './logo.svg';
import ironhackLogo from '../src/images/ironhack-logo-xs.png'
import menu from '../src/images/menu-top-xs.png'
import icon1 from '../src/images/icon1.png'
import icon2 from '../src/images/icon2.png'
import icon3 from '../src/images/icon3.png'
import icon4 from '../src/images/icon4.png'


import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
// src/App.js

function App() {
  return (
    <div className="App">
      <div className="section1"> 
        <nav className="navbar">
          <img src={ironhackLogo} className="ironLogo" alt="Ironhack Logo"></img> 
          <img src={menu} className="menu"></img>
        </nav>

        <div className="row justify-content-start">
          <div className="col-6 main ">
              <h1 >Say hello to ReactJS</h1>
              <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
              <button className="btn">Awesome!</button>
          </div>
        </div>

        </div>

      <div className="section2">
          <div className="gallery row">
            <article className="col">
              <img src={icon1}></img>
              <h2>Declarative</h2>
              <p>React makes it painless to create interactive UIs.</p>
            </article>

            <article className="col">
              <img src={icon2}></img>
              <h2>Components </h2>
              <p>Build encapsulated components that manage their state.</p>
            </article>

            <article className="col">
              <img src={icon3}></img>
              <h2>Single-Way</h2>
              <p> A set of immutable vales are passed to the component's.</p>
            </article>

            <article className="col">
              <img src={icon4}></img>
              <h2>JSX</h2>
              <p>Statically-typed designed to run on modern browsers.</p>
            </article>
          </div>
      </div>
      
    </div>
  );
}
export default App;
