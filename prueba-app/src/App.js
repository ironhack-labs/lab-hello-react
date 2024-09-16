
import './App.css';
import fix from './images/fix.png';
import imac from './images/imac.png';
import laptop from './images/laptop.png';
import tag from './images/tag.png';
import ironhack from './images/ironhack.png';
import lines from './images/lines.png';

function App() {
  return (
    <div className="App">
      

      <div id="section-1">
        <nav>
          <img id="top-left" src={ironhack} alt="iron" />
          <img id="top-right" src={lines} alt="lines" />
        </nav>
        
        <p id="title">Say hello to ReactJS</p>
        <p id="subtitle">You will learn blablabla</p>
        <button class="btn">Awesome!</button>
      </div>



      <div id="section-2">
        <div className="img-block">
          <img className="image" src={fix} alt="fix" />
          <h3> Declarative </h3>
          <article> React makes... </article>
        </div>
        
        <div className="img-block">
          <img className="image" src={laptop} alt="laptop" />
          <h3> Components </h3>
          <article> Build encapsulated... </article>
        </div>

        <div className="img-block">
          <img className="image" src={imac} alt="imac" /> 
          <h3> Single-Way </h3>
          <article> A set of... </article>
        </div>

        <div className="img-block">
          <img className="image" src={tag} alt="tag" />
          <h3> JSX </h3>
          <article> Statically-typed... </article>
        </div>
      </div>


    </div>
  );
}

export default App;
