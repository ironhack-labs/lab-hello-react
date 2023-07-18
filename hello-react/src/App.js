
import Logo from './components/Logo';
import './App.css';
import Menu from './components/Menu';
import Icon1 from './components/Icon1';
import Icon2 from './components/Icon2';
import Icon3 from './components/Icon3';
import Icon4 from './components/Icon4';

function App() {
  return (
    <div className="App">
      <nav>
        <Logo/>
        <Menu/>
      </nav>
      <div className="sayHello">
        <h1>Say Hello to <br/> ReactJS</h1>
        <p>You will learn how to use <br/>the most popular frontend library,<br/> 
    and become a super ninja developer.</p>
        <button className="btn">
          <strong>Awesome!</strong>
        </button>
      </div>
        <div className="Icons">

          <div className="icon1">
          <Icon1/>
          <h3>Declarative</h3>
          <p>React makes it painless tocreate interactive UIs.</p>
          </div>   

          <div className="icon2">
          <Icon2/>
          <h3>Components</h3>
          <p>Build encapsulated components that manage their state</p>
          </div>     

           <div className="icon3">
          <Icon3/>
          <h3>Single-Way</h3>
          <p>A set of inmmutable values are paseed to the component's</p>
          </div>     

          <div className="icon4">
          <Icon4/>
          <h3>Declarative</h3>
          <p>React makes it painless tocreate interactive UIs.</p>
          </div>     
        </div>
    </div>
  );
}

export default App;
