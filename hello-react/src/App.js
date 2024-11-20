import './App.css';
import icon1 from './images/icon1.png'
import icon2 from './images/icon2.png'
import icon3 from './images/icon3.png'
import icon4 from './images/icon4.png'
import ironhacklogoxs from './images/ironhack-logo-xs.png'
import menutopxs from './images/menu-top-xs.png'
import Widget from './components/Widget';
import Header from './components/Header'
import Button from './components/Button'

const infosArray = [
  {
    image:icon1,
    title:"Declarative",
    text:"React make it painless to create interactive UI's."
  },
  {
    image:icon2,
    title:"Components",
    text:"Build encapsulated components that manage their state"
  },{
    image:icon3,
    title:"Single-Way",
    text:"A set of immutable values are passed to the component's"
  },
  {
    image:icon4,
    title:"JSX",
    text:"Statically-typed, designed to run on modern browsers"
  }
]


function App() {
  return (
    <div className="App">
      <div className="banner">
        <Header/>
        <div className="banner-div">
          <h1>Say hello to ReactJS</h1> 
          <p>You will learn how to use the most popular frontend library, and become a super Ninja developper.</p>
          <Button/>
        </div>
      </div>
      <div className="widget-container">
        {infosArray.map(el=><Widget image={el.image} title={el.title} text={el.text}/>)}
      </div>
      
    </div>
  );
}
export default App;