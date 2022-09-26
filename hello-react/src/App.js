import './App.css';
import logo from './logo.svg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/ironhack-logo-xs.png" className="App-logo" alt="logo" />        
        <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/menu-top-xs.png" className="menu-logo" alt="logo" />        
      </header>
      <h1>Say hello to ReactJS</h1>
      <h3>You will learn how to use <br/>the most popular frontend library,<br/> and become a super Ninja developer</h3>
      <button>Awesome!</button>
      <img id="logo1" src={logo} />
      <img id="logo2" src={logo} />
      <img id="logo3" src={logo} />
      <img id="logo4" src={logo} />
      <img id="logo5" src={logo} />
      <img id="logo6" src={logo} />


      <div id='points'>
        <div className='point'>
          <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png" />
          <h5>Declarative</h5>
          <h6>React makes it<br/> painless to create<br/> interactive UIs</h6>
        </div>
        <div className='point'>
          <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png" />
          <h5>Components</h5>
          <h6>Build encapsulated<br/>components that<br/> manage their state</h6>
        </div>
        <div className='point'>
          <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png" />
          <h5>Single-Way</h5>
          <h6>A set of immutable<br/>values are passed to<br/> the components</h6>
        </div>
        <div className='point'>
          <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png" />
          <h5>JSX</h5>
          <h6>Statically-typed<br/> desiugned to run on<br/> modern browsers</h6>
        </div>
      </div>
    
    </div>
  );
}

export default App;
