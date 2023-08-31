import './App.css';
import menu from './images/menu.png'
import logo from './images/logo.png'
import action1 from './images/action-1.png';
import actionComputer from './images/action-computer.png'
import actionMonitor from './images/action-monitor.png'
import actionCode from './images/action-code.png'

function App() {
  return (
    <div className="App">
      <div className='header'>
        <div className='nav'>
          <span>
          <img src={logo} alt='logo'/>
          </span>
          <span>
            <img src={menu} alt='menu'/>
          </span>
        </div>
        <div className='content-text'>
          <h1>Say hello to <br /> ReactJs<br /></h1>
          <p>You will learn how to use <br />the most popular frontend lbrary,<br />and become a super Ninja developer.</p>
          <button className='btn'>Awesome</button>
        </div>
      </div>
      <div className='actions-container'>
        <div className='action-item'>
        <img src={action1} alt='action 1'/>
          <h3>Declarative</h3>
          <p>React makes it <br />painless to create interactive UIs.<br /></p>
        </div>
        <div className='action-item'>
        <img src={actionComputer} alt='action computer'/>
          <h3>Components</h3>
          <p>Build encapsulated<br />components that<br />manage their state.</p>
        </div>
        <div className='action-item'>
        <img src={actionMonitor} alt='action monitor'/>
          <h3>Single-Way</h3>
          <p>A set of immutable<br />values are passed to <br />the component's</p>
        </div>
        <div className='action-item'>
        <img src={actionCode} alt='action code'/>
          <h3>JSX</h3>
          <p>Statically-typed,<br />designed to run on<br />modern browsers.</p>
        </div>
      </div>
    </div>
  );
}
export default App;

