
// 1. IMPORTACIONES

import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/main'

function App() {
 
      

    return (

        <div className = "App">
     

          <Header  nombre = "Hector" ciudad = "Lima" />
          
        

          <hr />

        <Main />

          <hr />


        <Footer nombre="Hector" />




        </div>





   
  );
}


// 3. EXPORTACION
export default App;
