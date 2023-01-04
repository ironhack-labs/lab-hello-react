import './App.css';
import Navbar from './components/Navbar';
import MyButton from './components/MyButton';
import Cards from './components/Cards';

const heading = <h1>Say hello to ReactJS</h1>;
const paragraph = <p>You will learn how to use <br></br>
the most popular frontend library,<br></br>
 and become a super Ninja developer. </p>;

function App() {
  return (
    <div className="App">
    <Navbar /> 
    <div className='blackBox'>
    {heading}
    {paragraph}
    <MyButton/>
    </div>
    <div className='whiteBox'>
    <Cards/>
    </div>
    
    
      
      
    </div>
  );
}

export default App;
