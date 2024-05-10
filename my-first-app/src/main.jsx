import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)



export const Header = ({image1, image2, heading,parText }) => {
  
  
  return ( 
  
  <div className="heading">
  <nav className="navbar">

    <img src={image1}></img>
    <img className="menu" src= {image2}></img>
    </nav>
          
  

      <h1>{heading}</h1>
     <p>{parText}</p>
     <button> Awesome!</button>

    
    </div>
   
  );
};

export const Division = ({image, hText, pText }) => {

  return (

    <div className = "division">

      <img src={image}></img>
      <h2>{hText}</h2>
      <p>{pText}</p>
    </div>
  )


}
