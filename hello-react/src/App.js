import './App.css';
import ironhack from "./images/ironhack.png";
import topmenu from "./images/topmenu.png";

function App() {
  return (
    <div className="App">
      <nav className="navbar"> </nav>
      <div className="first-container">
      <div className="img1"> <img src={ironhack} alt="" />
      <img src={topmenu} alt="" />
      </div> 
      
      <div className="text-line">
        <h1>Say hello to</h1>
      </div>
      <div className="text-line">
        <h1>ReactJs</h1>
      </div> 

      <div className="head">
      <h2>You will learn how to use </h2>
      <h2>The most popular front end library,</h2>
      <h2>And become a super Ninja developer. </h2>
      </div>

       <button className="button">Awesome!</button>
       </div>
       <div className="second-container">

       </div>
    </div>
  );
}

export default App;
