import declarativeImg from './images/2.png';
import componentsImg from './images/3.png'; 
import singleWayImg from './images/4.png';
import JSXImg from './images/5.png';

function Cards() {
    return ( 
       <div className="cardMenu">
       <section className="singleCard">
       <img src={declarativeImg} className="App-logo" alt="declarativeImg" />
      <h4>Declarative</h4>
      <p>React makes..</p>
       </section>

       <section className="singleCard">
       <img src={componentsImg} className="App-logo" alt="componentsImg" />
      <h4>Components</h4>
      <p>React makes..</p>
       </section>

       <section className="singleCard">
       <img src={singleWayImg} className="App-logo" alt="singleWayImg" />
      <h4>Single-way</h4>
      <p>React makes..</p>
       </section>

       <section className="singleCard">
       <img src={JSXImg} className="App-logo" alt="JSXImg" />
      <h4>JSX</h4>
      <p>React makes..</p>
       </section>
           
       </div>
     );
  }
   
  export default Cards;