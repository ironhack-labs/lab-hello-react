import './App.css';
 import ironhackLogo from './pictures/ironhack-logo-xs.png';
 import menuTop from './pictures/menu-top-xs.png';
 import icon1 from './pictures/icon1.png';
 import icon2 from './pictures/icon2.png';
 import icon3 from './pictures/icon3.png';
 import icon4 from './pictures/icon4.png';


 export default function App() {
   return (
     <div className="App">
       <nav>
       <img src={ironhackLogo} alt="ironhack logo" />
       <img src={menuTop} alt="menu Top" />
       </nav>
       <h1>Say hello to React JS</h1>  
       <p className="subtitle">You will learn  how to use the most populart frontend library, and become a super Ninja developer.</p>
       <button>Awesome</button>
       <container className="elements">
         <div>
         <img src={icon1} alt="icon1" />
         <h3>Declarative</h3>
       <p className="texto">React makes it painless to create interactive UIs.</p>
         </div>

         <div>
         <img src={icon2} alt="icon2" />
         <h3>Components</h3>
         <p className="texto">Build encasulapted components that manage their state.</p>
         </div>

         <div>
         <img src={icon3} alt="icon3" />
         <h3>Single-Way</h3>
         <p className="texto">A set of immutable values are passed to the components.</p>
         </div>

         <div>
         <img src={icon4} alt="icon4" />
         <h3>JSX</h3>
         <p className="texto">Statically-typed, designed to run on modern browsers.</p>
         </div>


       </container>


     </div>
   );
 }
