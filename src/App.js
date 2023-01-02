import './App.css';
import ironhackLogo from '../src/images/react1.png';
import menuToggle from '../src/images/react2.png';
import declarativePic from '../src/images/react3.png';
import componentsPic from '../src/images/react4.png';
import singleWayPic from '../src/images/react5.png';
import jsxPic from '../src/images/react6.png';

function App() {
  return (
    <div className="App">
      <section className="App-header">
        
        <header className='Opening-images'>
      	<img src={ironhackLogo} alt="ironhack logo" id='ironhackLogo'/>
        <img src={menuToggle} alt="menu toggle" id='menuToggle'/>
        </header>

        <div className='Opening-text'>
      <h1 id='heading'>Say hello to ReactJS</h1>
      <p id='opening-para'>You will learn how to use the most popular front-end library, and become a super Ninja developer</p>
      <button id='awesome'>Awesome!</button>
      </div>

      </section>

      <footer className="Closing-images">
        <article className='pictureText'>
        <img src={declarativePic} alt="declarative" id='declarativePic'/>
        <h4 className='pictureHeading'>Declarative</h4>
        <p className='picPara'>React makes it painless to make interactive UIs.</p>
        </article>
        <article className='pictureText'>
        <img src={componentsPic} alt="components" id='componentsPic'/>
        <h4 className='pictureHeading'>Components</h4>
        <p className='picPara'>Build encapsulated components that manage their state.</p>
        </article>
        <article className='pictureText'>
        <img src={singleWayPic} alt="single-way" id='singleWay'/>
        <h4 className='pictureHeading'>Single-Way</h4>
        <p className='picPara'>A set of immutable values are passed to the components.</p>
        </article>
        <article className='pictureText'>
        <img src={jsxPic} alt="JSX" id='jsxPic'/>
        <h4 className='pictureHeading'>JSX</h4>
        <p className='picPara'>Statically typed, designed to run on modern browsers.</p>
        </article>
        </footer>
    </div>
  );
}
export default App;