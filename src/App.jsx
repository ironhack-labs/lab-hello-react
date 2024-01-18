// for import of pictures see about 02:10:00 on the video
// . is the public, so we have the ./ in the scr of the img!
import './App.css'
import Ironhack from "../src/assets/ironhack.png"
import ReactPicture from "../src/assets/react.svg"
import Repair from "../src/assets/repair.png"
import Play from "../src/assets/playSymbol.png"
import Settings from "../src/assets/settings.png"
import Tag from "../src/assets/tag.png"




function App() {
  
  return (
   <div className="App"> 
    <img src={Ironhack} alt="Ironhack symbol"></img>
    <img src={ReactPicture} alt ="React symbol"></img>
    <img src={Repair} alt ="Repair symbol"></img>
    <img src={Play} alt ="Play symbol"></img>
    <img src={Settings} alt ="Settings symbol"></img>
    <img src={Tag} alt ="Tag symbol"></img>
    
        
   </div>
  )
}

export default App

