import Logo from './components/Logo'
import Menu from './components/Menu';
import Icon1 from './components/Icon1'
import Icon2 from './components/Icon2'
import Icon3 from './components/Icon3'
import Icon4 from './components/Icon4'
import './App.css';

function App() {
  return (
    <div className="App">
    
    <nav> 
      <Logo/>
      <Menu/>
    </nav>
    

    <div className='Hello'>
    <h1>Say Hello to <br/>ReactJS</h1>
    <p>You will learn how to use <br/> the most popular frontend library <br/> and become a super Ninja developer</p>
    </div>

    <div className='Hello'>
    <button className='button'>
    <b>Awesome!</b>
    </button>
    </div>

    <div className='Icons-div'>
    
    <div className='Icon1'>
    <Icon1/>
    <h3>Declarative</h3>
    <p>React makes it <br/> painles to create <br/> interactive UIs.</p>
    </div>

    <div className='Icon2'>
    <Icon2/>
    <h3>Declarative</h3>
    <p>Build encapsulated <br/> components that <br/> manager their state.</p>
    </div>
    
    <div className='Icon3'>
    <Icon3/>
    <h3>Single-Way</h3>
    <p>A set of immutable <br/> values are passed to <br/> the component's</p>
    </div>

    <div className='Icon4'>
    <Icon4/>
    <h3>JSX</h3>
    <p>Staticallly-typed, <br/> designed to run on <br/> modern browsers</p>
    </div>


    </div>

    
    
    
    </div>


  );
}

export default App;
