import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LandingPage from './landingPage';
import Declarative from './declarative';
import Components from './components';
import SingleWay from './single-way';
import JSX from './jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App/>
      <LandingPage/>

      <div className='conteinerBotton'>  
      <Declarative/> 
      <Components/>
      <SingleWay/>
      <JSX/>
      </div>
   
  </React.StrictMode>
);

reportWebVitals();
