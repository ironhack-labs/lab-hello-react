import './App.css';
import Navbar from './Components/Navbar/navBar';
import List from './Components/List/List'

function App() {
  return (
    <div className="App">
      <Navbar/> 
      <div>
        <h1>Say Hello to ReactJs</h1>
        <p>You will learn how to use the most popular frontend library, and become a super Ninja developer</p>
      </div>
      <List/>
    </div>
  );
}

export default App;
