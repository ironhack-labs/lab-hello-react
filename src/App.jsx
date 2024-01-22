import Navbar from './components/Navbar/Navbar';
import List from './components/List/List';
import './components/Navbar/Navbar.css'
import './App.css'



function App() {
  return (
    <div className="App">
      <div className="container-home">
        <div className="nav">
        <Navbar />
        </div>
      <div className='home'>
        <h1>Say hello to ReactJS</h1>
        <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
        <button>Awesome!</button>
      </div>
      </div>
      <List />
    </div>
  )
}

export default App;
