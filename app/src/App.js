import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Fragment } from 'react';
import { Inicio } from './Components/Inicio';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route exact path ="/" element ={<Inicio/>} />  
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
