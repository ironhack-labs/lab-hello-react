import './App.css';
import Header from './components/Header.js';
import SideBodymenu from './components/SiteBodymenu';

function App() {
  return (
        <div className="App">
          <div className = "App-header">
            <Header />
          </div>
          <div>
            <SideBodymenu />
          </div>
        </div>
  );
}
export default App;