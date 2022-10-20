
import './App.css';
import ironhackLogo from './images/ironhack-logo.png';
import menu from './images/menu.png';
import icon1 from './images/icon-1.png';
import icon2 from './images/icon-2.png';
import icon3 from './images/icon-3.png';
import icon4 from './images/icon-4.png';

import Heading from './components//Heading';
import Button from './components/Button';
import Declarative from './components/Declarative';
import Components from './components/Components';
import SingleWay from './components/SingleWay';
import Jsx from './components/Jsx';


function App() {
  return (
    <div className="App">
 
        <div className="header">
           <div className="menu-wrapper">
               <img src={ironhackLogo} alt='ironhack logo' id="ironhack-logo"></img>
               <img src={menu} alt="menu" id="menu"></img>
           </div>
      <Heading />
      <Button />

        </div>

        <div className="content-wrapper">
            <div className="content">
                <img src={icon1} className="icon" alt="icon1"></img>
                <Declarative/>
            </div>
            
              <div className="content">
              <img src={icon2} className="icon" alt="icon2"></img>
              <Components/>
              </div>

              <div className="content">
              <img src={icon3} className="icon"  alt="icon3"></img>
              <SingleWay />
              </div>


              <div className="content">
              <img src={icon4} className="icon"  alt="icon4"></img>
              <Jsx />
              </div>
        </div>
    </div>
  );
}

export default App;
