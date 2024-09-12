//aqui importo componentes 
import './App.css';
import Cards from './components/Cards';
//aqui importo imagenes 
import logo from './images/logo.png'
import menu from './images/menu.png'
import imagen1 from './images/imagen1.png'
import imagen2 from './images/imagen2.png'
import imagen3 from './images/imagen3.png'
import imagen4 from './images/imagen4.png'



function App() {
  return (
    <div className="App">
    <div className='container'>
     <div className='navbar'>
       <img src={logo}/>
       <img src={menu}/>
      </div>
      <div className='title-button'>
        <h1>Say hello to ReactJs</h1>
        <p>You will learn how to use the most popular front library, and become a super Nija developer.</p>
        <button>Awesome!</button>
      </div>
    </div>
    <div className='props-cards'>
      <Cards titulo= 'Declarative' imagen={imagen1} descripcion= 'React makes it painless to create interactive Uls.'/>
      <Cards titulo= 'Componets' imagen={imagen2} descripcion= 'Build encapsulated components that manage their state.'/>
      <Cards titulo= 'Single-Way' imagen={imagen3} descripcion= 'A set of inmutable values are passed to the component´s.'/>
      <Cards titulo= 'JSX' imagen={imagen4} descripcion= 'Statically-typed, designed to run on modern browsers.'/>

    </div>
    </div>
  );
}

export default App;
