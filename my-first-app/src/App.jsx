import './App.css';


import iconNav1 from "../src/assets/ironhack-logo-xs.png"; 
import iconNav2 from "../src/assets/menu-top-xs.png"; 

import icon1 from "../src/assets/icon1.png";
import icon2 from "../src/assets/icon2.png";
import icon3 from "../src/assets/icon3.png"; 
import icon4 from "../src/assets/icon4.png"; 





function App() {
  return (
   
    <div class="mainClass">
<div id="Section1">

<nav class= "nav">
  
<img src={iconNav1} alt="example" />

<img src={iconNav2} alt="example" />

</nav>



      <div class="text-container">
      <h1>Say Hello to ReactJS</h1>
      <p>You will learn how to use the most popular frontend library and become a super Ninja Developer</p>
      <button class="button"><h3>Awesome</h3></button>
      </div>
</div>

<div id="Section2">

<div>
<img src={icon1} alt="example" />
<h2>Declarative</h2>
<p>React make it painless to create interactive UIs.</p>
</div>

<div>
<img src={icon2} alt="example" />
<h2>Components</h2>
<p>Build encapsulated components that manage their state</p>
</div>

<div>
<img src={icon3} alt="example" />
<h2>Single-way</h2>
<p>A set of immutable values are passed to the component's</p>
</div>

<div>
<img src={icon4} alt="example" />
<h2>JSX</h2>
<p>Statically typed, design to run on moder browsers.</p>
</div>

</div>

    </div>

  );
}

export default App;
