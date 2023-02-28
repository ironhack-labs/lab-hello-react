import React from 'react'
import './Container.css'

const Container = ({ container }) => {
  return (
    <div className="Container">
      <div className="Card">
        <img src={container.image} alt={container.name} />
        <h2>{container.title}</h2>
        <p>{container.catch}</p>
      </div>
    </div>
  )
}
export default Container
