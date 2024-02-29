import React from 'react'
import './Button.css'
const Button = ({text}) => {
    console.log(text)
  return (
    <button className='button'>{text}</button>
  )
}

export default Button