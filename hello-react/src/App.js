import './App.css';
import ImageOne from './images/ImageOne';
import ImageTwo from './images/ImageTwo';
import ImageThree from './images/ImageThree';
import ImageFour from './images/ImageFour';
import ImageFive from './images/ImageFive';
import ImageSix from './images/ImageSix';
import Logo from './logo.svg'

function App() {
  return (
    <div className="App">
      <nav className='NavImages'>
        <div className='ImageOne'>
           <ImageOne />
        </div>  
        <div className='ImageTwo'>
           <ImageTwo />
        </div>   
      </nav>
      <div className='Header'>
        <h1>Say Hello to ReactJS</h1>
      </div>
      <div className='paragraph'>
      <p>
          You will learn how to use the most popular frontend library, and become a super Ninja developer.
      </p>
      </div>
      <div>
      <button className='button'>Awesome!</button>
      </div>
      <div>
        <img className='Logo1' src={Logo}/>
        <img className='Logo2' src={Logo}/>
        <img className='Logo3' src={Logo}/>
        <img className='Logo4' src={Logo}/>
        <img className='Logo5' src={Logo}/>
        <img className='Logo6' src={Logo}/>
      </div>
      <div className='Images'>
        <div className='ImageThree'>
          <ImageThree />
          <h4>Declarative</h4>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div className='ImageFour'>
          <ImageFour />
          <h4>Components</h4>
          <p>Build encapsulated components that manage their state.</p>
        </div>
        <div className='ImageFive'>
          <ImageFive />
          <h4>Single-Way</h4>
          <p>A set of immutable values are passed to the component's.</p>
        </div>
        <div className='ImageSix'>
          <ImageSix />
          <h4>JSX</h4>
          <p>Statically-typed designed to run on modern browsers.</p>
        </div>
      </div>
    </div>
  );
}
export default App;