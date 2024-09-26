import React from 'react'

const Button = (props) => {
  const { text, url } = props
  return (
    <div className='Button'>
    <a href={url}>{text}</a>
    </div>
  )
}

export default Button