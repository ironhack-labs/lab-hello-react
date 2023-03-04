import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Declarative from './components/Declarative';
import Components from './components/Components';
import Singleway from './components/Singleway';
import Jsx from './components/Jsx';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Declarative />
      <Components />
      <Singleway />
      <Jsx />
    </div>
  );
}

export default App;
