import React from 'react'

export default function Widget({image, title, text}) {
  return (
    <div className="widget">
        <img src={image}/>
        <div>
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    </div>
  )
}
