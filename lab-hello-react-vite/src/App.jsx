import './App.css';
import Logo from './assets/lab1.png';
import MenuTop from './assets/lab2.png';
import icon1 from './assets/lab3.png';
import icon2 from './assets/lab4.png';
import icon3 from './assets/lab5.png';
import icon4 from './assets/lab6.png';

function App() {
  return (
    <div className="App">
    <div className='dark-background'>
      <nav className="nav">
        <img src={Logo} alt="Ironhack Logo" className="logo" />
        <img src={MenuTop} alt="MenuTop Hamburger" className="logo"/>
      </nav>
      <div className='text-box'>
      <header className='title'>Say hello to ReactJS</header>
      <p>You will learn how to use the most popular frontend library and become a super Ninja Developer</p>
      </div>
      <button className='button'>Awesome!</button>
      </div>
      <div className='feature-container'>
        <div className='individual-container'>
          <img src={icon1} alt="icon1" className='feature-img'/>
          <h2 className='h2'>Declarative</h2>
          <p className='p'>React makes it painless to create interactive UIs</p>
        </div>
        <div className='individual-container'>
          <img src={icon2} alt="icon2" className='feature-img' />
          <h2 className='h2'>Components</h2>
          <p className='p'>Build encapsulated components that manage their state</p>
        </div>
        <div className='individual-container'>
          <img src={icon3} alt="icon3"className='feature-img' />
          <h2 className='h2'>Single-Way</h2>
          <p className='p'>A set of immutable values are passed to the components</p>
        </div>
        <div className='individual-container'>
          <img src={icon4} alt="icon4"className='feature-img' />
          <h2 className='h2'>JSX</h2>
          <p className='p'>Statically-typed, designed to run on modern browsers</p>
        </div>
      </div>
    </div>
  );
}

export default App;