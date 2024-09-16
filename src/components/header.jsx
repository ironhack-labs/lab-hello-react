import Navbar from "./navbar"

function Header() {
    return (
      <div class="App-header">
        <Navbar/>
        <h1>Say Hello to ReactJS</h1>
        <p>You will learn how to use<br/>
        the most popular frontend library<br/>
        and become a super Ninja developer.</p>
        <button class="App-btn">Awesome!</button>
      </div>
    );
  }
  
  export default Header