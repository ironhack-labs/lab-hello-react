// src/App.js
import './App.css';
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png';
import ironlogo from './images/ironhack-logo-xs.png';
import menulogo from './images/menu-top-xs.png';


const imgHeight = 10; 
function App() {  
  return (
    <div className="App">
<div>
        <div className="mainText">

          <header>

          <img src={ironlogo} alt="ironhack logo" style={{margin: '10px'}}/>
          <img src={menulogo} alt="menu logo" style={{height: imgHeight + 'px', margin: '30px'}}/>

          </header>


          <h1>Say hello to <br></br> ReactJS </h1>
          <p>You will learn how to use <br></br> the most popular frontend library, <br></br> and become a super Ninja developer.</p>
        <div>
          <button> <a href='google.com'>Awesome!</a>   </button>
          </div>
          </div>

          <div className="bottomBox">
            <div>
              <img src={icon1} alt="icon1" style={{margin: '100px 0px 20px'}}/>
              <h3>Declarative</h3>
              <p>react makes it easier to create interactive UIs</p>
            </div>
            <div>
              <img src={icon2} alt="icon1" style={{margin: '100px 0px 20px'}}/>
              <h3>Declarative</h3>
              <p>react makes it easier to create interactive UIs</p>
            </div>
            <div>
              <img src={icon3} alt="icon1" style={{margin: '100px 0px 20px'}}/>
              <h3>Declarative</h3>
              <p>react makes it easier to create interactive UIs</p>
            </div>
            <div>
              <img src={icon4} alt="icon1" style={{margin: '100px 0px 20px'}}/>
              <h3>Declarative</h3>
              <p>react makes it easier to create interactive UIs</p>
            </div>
          </div>

      </div>
    </div>
    );
  }
export default App;

