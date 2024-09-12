import './App.css';
import ironhackLogo from "./images/ironhack-logo-xs.png"
import menu from "./images/menu-top-xs.png"
import icon1 from "./images/icon1.png"
import icon2 from "./images/icon2.png"
import icon3 from "./images/icon3.png"
import icon4 from "./images/icon4.png"

function App() {
  return (
    <div className="App">

<nav className='nav'>
<img src={ironhackLogo} alt="Logo"/>
<img src={menu} alt="Menu"/>
</nav>

<div className='text'>
<h1>Say hello to <br /> ReactJS</h1>
<p>You will learn how to use the most popular frontend library, and become a super Ninja developer</p>

<button className='btn'>Awesome!</button>
</div>

<div className='second'>
<div className='icons'>
<img src={icon1} alt="Icon1"/>
<img src={icon2} alt="Icon2"/>
<img src={icon3} alt="Icon3"/>
<img src={icon4} alt="Icon4"/>
</div>
</div>
    </div>
  );
}

export default App;
