// src/App.jsx
import './App.css';
import Header from './componentes/header';
import Tarjeta from './componentes/tarjeta';
import Texto from './componentes/texto';

import tarjetas from './data/tarjetas.data.js';

function App() {
  return (
    <div>
    <div className="App">
      <div>
        <Header></Header>
      </div>
      <div>
        <Texto></Texto>
      </div>
      </div>
    <div className='card-container'>
    {tarjetas.map((tarjeta, i) => (

    
    <Tarjeta key={i} imagen={tarjeta.imagen}
      texto={tarjeta.text}
      titulo={tarjeta.titulo} />

    ))}
  </div>
  </div>
  );
}

export default App;
