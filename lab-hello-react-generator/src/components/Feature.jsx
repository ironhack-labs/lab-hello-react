import React from "react"

const Feature = (props) => {
  return (
    <div className="feature-bloc">
      <img src={props.image} className="feature-icon" alt={props.alt} />
      <h3>{props.heading}</h3>
      <p>{props.description}</p>
    </div>
  )
}

export default Feature
