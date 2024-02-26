import './App.css';
import Navbar from './Components/Navbar/navBar';
import List from './Components/List/List'

function App() {
  return (
    <div className="App">
    <Navbar/> 
      <div className="principal">
        <h1 className='intro'>Say Hello to ReactJs</h1>
        <p className="text">You will learn how to use the most popular frontend library, and become a super Ninja developer</p> 
        <button>Awesome!</button>
      </div>
      <div className="secundario">
        <List/>
      </div>
    </div>
  );
}

export default App;
