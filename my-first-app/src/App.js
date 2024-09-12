
import './App.css';
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png';
import ironlogo from './images/ironhack-logo-xs.png';
import menulogo from './images/menu-top-xs.png';

const bgStyle = {
  backgroundColor: 'darkblue'
}


const imgHeight = 10;
function App() {
  return (
    <div className="App">
<div>
      <div style={bgStyle}>
        <div className='topBox'>
        <img src={ironlogo} alt="ironhack logo" style={{margin: '10px'}}/>
        <img src={menulogo} alt="menu logo" style={{height: imgHeight + 'px', margin: '30px'}}/>
        </div>

        <div className="mainText">
          <h1>Say hello to ReactJS</h1>
          <h2>You will learn how to use the most popular frontend library, and become a super Ninja developer</h2>
          {/* <div style={{margin: '50px 0px 50px 0px'}}> */}
          <div>
            <a href='google.com'>Awesome!</a>
          </div>
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
  