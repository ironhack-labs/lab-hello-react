import Menu from './Menu';
import Service1 from './Service1';
import Service2 from './Service2';
import Service3 from './Service3';
import Service4 from './Service4';
import Conteudo from './Conteudo';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <div className='topo'>
      
        <Menu />
        <Conteudo />
      </div>
      <div className='vantagens'>
        <Service1 />
        <Service2 />
        <Service3 />
        <Service4 />
      </div>
    </div>
  );
}
export default App;