import React from 'react'

const Feature = (props) => {
  return (
    <div className='Feature'>
      <img className="Feature__img" src={props.imgPath} alt={props.alt} />
      <h3 className='Feature__title'>{props.title}</h3>
      <p className='Feature__description'>{props.description}</p>
    </div>
  )
}

export default Feature