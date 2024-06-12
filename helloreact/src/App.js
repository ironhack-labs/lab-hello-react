import './App.css';
import Jumbotron from './components/Jumbotron'
import Card from './components/Card'

function App() {
  return (
    <div className="App">
     <div className="container m-1 pt-3">
      <Jumbotron />
      <Card />
      </div>
    </div>
  );
}

export default App;
