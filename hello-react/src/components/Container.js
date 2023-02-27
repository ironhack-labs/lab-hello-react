import React from 'react'

function Container(props) {
    const {image, title, paragraph} = props
  return (
    <div className='container'>
        <img src={image} alt="icon" />
        <h4>{title}</h4>
        <p>{paragraph}</p>
    </div>
  )
}

export default Container