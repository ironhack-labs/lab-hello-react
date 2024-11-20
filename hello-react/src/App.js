// src/App.js
import './App.css';
import logo from './images/logo.png'
import menu from './images/stripes.png'
import sign from './images/sign.png'
import desktop from './images/desktop.png'
import computer from './images/computer.png'
import disk from './images/disk.png'
import './components/Container'
import Container from './components/Container';

function App() {
  return (
    <div className="App">

      <nav className='navbar'>
        <img src={logo} alt="logo" />
        <img src={menu} alt="menu" />
      </nav>

      <div className='hello'>
        <h1>Say hello to ReactJS </h1>
        <p> You will learn how to use the most popular library, and became a super Ninja developer.</p>
        <div className='button'>
        <button className='btn'> Awesome!</button>
        </div>
      </div>
      
      <div className='second-section'>

        <div className='items'>
        <article>
         <Container image={sign} title="Declarative" paragraph="React makes it painless to create interactive UIs."></Container>
         </article>
         <article>
         <Container image={computer} title="Components" paragraph="Build encapsulated components that manage their state."></Container>
         
         </article>
         <article>
         <Container image={desktop} title="Single-Way" paragraph="A set of immutable values are passes to the component's."></Container>
         </article>
         <article>
         <Container image={disk} title="JSK" paragraph="Statically-typed designed to run on modern browsers."></Container>
         </article>
        </div>

      </div>

    </div>
  );
}
export default App;
