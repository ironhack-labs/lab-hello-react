import './App.css';
import Button from "../src/image/Button"
import IconOne from "./image/IconOne"
import IconTwo from "./image/iconTwo"
import IconFour from "./image/IconFour"
import Logo from "../src/image/Logo"
import Top from "../src/image/Top"
import IconThree from './image/IconThree';

function App() {
  return (
    <div>
      <nav class = "nav">
        <div><Logo/></div>
        <div><Top/></div>

      </nav>
     
      <header class="App-header">
        <div>
        
        <h1>Say hello to react Js</h1>
        <br/>
        <p>
        You will learn how to use the most popular frontend library,<br/> and 
        become a super Ninja developer
        </p> 

        </div>
            

        <div class="btn">

        <Button/>

        </div>


      </header>
      <div class ="container">
          <div>
            <IconOne/>
          </div>
          <div>
            <IconTwo/>
          </div>
          <div>
            <IconThree/>
          </div>
          <div>
            <IconFour/>
          </div>


      </div>
    </div>
  );
}

export default App;
