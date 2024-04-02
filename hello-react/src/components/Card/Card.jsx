import React from 'react';
import './Card.css'

function Card(props) {
    const {img, h2, text} = props
  return (
    <div className='Card'>
        <img src={img} ></img>
        <h2>{h2}</h2>
        <p>{text}</p>
    </div>
  )
}

export default Card;