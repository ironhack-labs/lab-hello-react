
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
  return (<>
    <div className="App">
    <img alt="" src={menuTop}></img>
    <img alt="" src={ironhackLogo}></img>
    <p>Say hello to<br/>ReactJS </p>
    <h2>You will learn how to use <br/>the most popular frontend library,<br/>
    and become a super Ninja developer.</h2>
   <button>Awesome!</button>
   </div>
  
   <Card cards ={Card1}/>   
   <Card cards ={Card2}/> 
   <Card cards ={Card3}/>
   <Card cards ={Card4}/>

   
   
   </>
    
   


  );
}
export default App;
