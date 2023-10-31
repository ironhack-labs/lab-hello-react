// src/App.jsx
import './App.css';
import img from './assets/images/ironhackgreylogo.png'
import img2 from './assets/images/68747470733a2f2f656475636174696f6e2d7465616d2d323032302e73332e65752d776573742d312e616d617a6f6e6177732e636f6d2f7765622d6465762f6c6162732f6c616e64696e672d706167652f6d656e752d746f702d78732d6461726b2e706e67.png'
import img3 from './assets/images/codeimgicon.png'
import img4 from './assets/images/computerimgicon.png'
import img5 from './assets/images/computerimgdeficon.png'
import img6 from './assets/images/cpmputerimghtmlicon.png'


function App() {
  return (
    <div className="App" id="App">
      <section className='whole-blue-part'>
      <main className='nav-bar'>
        <img id='grey-logo' src = {img}/>
        <img id='menu-logo' src = {img2}/>
      </main>
      <div className='blue-part'>
        <div>
        <h1>Say hello to <br/> ReactJS</h1>
        <p>You will learn how to use <br/> the most popular frontend library,<br/> and become a super Ninja developer.</p>
        <button id="button-awesome">Awesome!</button>
        </div>
      </div>
      </section>
      <div className='white-part'>
        <div>
        <img id='img3'src = {img3}/>
        <h2 id='h2-1'>Declarative</h2>
        <p id='p1'>React makes it<br/> painless to create<br/> interactive UI.</p>
        </div>
        <div>
        <img id='img4'src = {img4}/>
        <h2 id='h2-2'>Components</h2>
        <p id='p2'>Build encapsulated<br/> mponents that<br/> manage their state.</p>
        </div>
        <div>
        <img id='img5'src = {img5}/>
        <h2 id='h2-3'>Single-Way</h2>
        <p id='p3'>A set of immutable<br/> values are passed to<br/> the component's.</p>
        </div>
        <div>
        <img id='img6'src = {img6}/>
        <h2 id='h2-4'>JSX</h2>
        <p id='p3'>Statially-typed,<br/> designed to run on<br/> modern browsers.</p>
        </div>
      </div>
    </div>
    
  );
}

export default App;