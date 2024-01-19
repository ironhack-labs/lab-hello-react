// src/App.jsx
import './App.css';
import TopContent from './components/TopContent/TopContent';
import List from './components/List/List'

function App() {
  return (
    <><div className="App">
    </div><nav>
        <TopContent />
      </nav>
      <div>
        <List />
      </div></>
  );
}

export default App;