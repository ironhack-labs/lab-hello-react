import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png'
import icon3 from './images/icon3.png'
import icon4 from './images/icon4.png'
function LandingContent() {

   
    return (
        <div class='content-container'>
        <div class='icon'>
       <img src={icon1} alt="icon1" />
       <h3>Declarative</h3>
       <p class='contentP'>React makes it painless to create interactive UIs</p>
       </div>
       <div class='icon'>
       <img src={icon2} alt="icon2" />
       <h3>Components</h3>
       <p class='contentP'>Build encapsulated components that manage their states</p>
       </div>
       <div class='icon'>
       <img src={icon3} alt="icon3" />
       <h3>Single Way</h3>
       <p class='contentP'>A set of immutable values are passed to the compoents</p>
       </div>
      <div class='icon'>
      <img src={icon4} alt="icon4" />
      <h3>JSX</h3>
       <p class='contentP'>Statically-typed,designed to run on modern browsers</p>
      </div>
     </div>
        
    );
  }

  export default LandingContent;