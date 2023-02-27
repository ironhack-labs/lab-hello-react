import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import BottomPart from './components/BottomPart';



function App() {
  return (
    <div className="App">
    <div class="upperPart">
    <NavBar/>
    <Header/>
    </div>

    <BottomPart/>


    </div>
  );
}

export default App;
