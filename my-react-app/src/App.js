// src/App.js
import './App.css';
import Footer from './footer';
import declar from './images/icon1.png' 
import comp from './images/icon2.png' 
import singWay from './images/icon3.png' 
import jsximage from './images/icon4.png' 
import Menu from './Menu';
import imageleft from './images/ironhack-logo-xs.png'
import imageright from './images/menu-top-xs.png'

const imagelogo = {
  image1: imageleft,
  image2: imageright

}


const declarative = {
  image : declar,
  name : 'Declarative' ,
  article: 'React makes it painless to create interactive Uls'
}
const components = {
  image : comp,
  name : 'Components' ,
  article: 'Build encapsulated components that manage their state.'
}
const singleWay = {
  image : singWay,
  name : 'Single-Way' ,
  article: "A set of immutable values are passed to the component's."
}
const jsx = {
  image : jsximage,
  name : 'JSX' ,
  article: 'Statically-typed. designed to run on modern browsers.'
}


function App() {
  return (
    <>
      <div className="App">
        <Menu {...imagelogo}/>
      </div>

       <div className='footerWrap'> 
        <Footer {...declarative}/>
        <Footer {...components}/>
        <Footer {...singleWay}/>
        <Footer {...jsx}/>
      </div>

    </>
  );
}
export default App;