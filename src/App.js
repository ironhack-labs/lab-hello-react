import './App.css';
import NavBar from './components/NavBar'
import Main from './components/Main'
import Button from './components/Button'
import Icons from './components/Icons'

function App() {
  return (
    <div className="App">

      <div className="up"> 
        <NavBar />

        <Main />
          
        <Button />
      </div>
      
      <Icons />
      
    </div>

  );
}

export default App;
