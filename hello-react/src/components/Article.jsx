import React from 'react'

const Article = (props) => {
  return (
    <article className='article'>
    <img src={props.src} alt="icon"></img>
    <h3>{props.text}</h3>
    <p>{props.p}</p>
    </article>
  )
}

export default Article