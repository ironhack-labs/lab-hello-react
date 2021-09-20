
// src/App.js
import './App.css';
import menuTop from './image/menu-top-xs.png';
import ironhackLogo from './image/ironhack-logo-xs.png';
import icon1 from './image/icon1.png';
import icon2 from './image/icon2.png';
import icon3 from './image/icon3.png';
import icon4 from './image/icon4.png';
import Card from './image/components/Card';


const Card1= {title:"Declarative", description:"React makes it painless to create interactive UIs", image:icon1}
const Card2= {title:"Components", description:"build encapsulated components that manage their state", image:icon2}
const Card3= {title:"Single-way", description:"A set of immutable values are passed to the component's", image:icon3}
const Card4= {title:"JSX", description:"Staticlly-typed, designed to run on modern browsers", image:icon4}






function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="nav">
          <div className="img1">
            <img src={ironhackLogo} className="App-logo" alt="logo" />
          </div>
          <div className="img2">
            <img src={menuTop} className="App-menu" alt="logo" />
          </div>
        </nav>
        <div className="container">
          <div>
            <h1>Say hello to ReactJS</h1>
          </div>
          <div>
            <h4>
              You will learn how to use<br></br> the most popular frontend library, <br></br>and
              become a super Ninja developer.
            </h4>
          </div>
          <p className="awesome"><span> Awesome! </span></p>
        </div>
      </header>
   
   <div className="card">
   <Card cards ={Card1}/>   
   <Card cards ={Card2}/> 
   <Card cards ={Card3}/>
   <Card cards ={Card4}/>

   </div>
   
   </div>
    
   


  );
}
export default App;
