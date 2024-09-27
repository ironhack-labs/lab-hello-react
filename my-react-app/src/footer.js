import './App.css';
import React from 'react';

const Footer = ({image, name, article}) => {  
    return(
        <div className='FOOTER'>
            <div className='container'>
                <img src={image} />
                <h1 >{name}</h1> 
                <p style={{fontSize: '15px'}, {width: '70%'} }> {article}</p>

            </div>
        </div>
    )
}
export default Footer