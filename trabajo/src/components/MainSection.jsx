import React from 'react'
import NavBar from './NavBar'
import "./mainStyle.css"

export default function MainSection() {
  const handleClick = () => {
    window.location.href = "https://es.react.dev/";
  };
  return (
    <div className='mainBack'>
      <NavBar/>

      <div className='words'>
        <h1>Say hello to ReactJS</h1>
        <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
        <button onClick={handleClick}>Awesome!</button>
      </div>
    </div>
  )
}
