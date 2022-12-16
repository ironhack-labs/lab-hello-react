import React from "react";

const Avatar = ({image, firstName, lastName}) => {
  return (
    <div>
      <h1>Hello I'm {firstName} {lastName} </h1>
      <img src={image} alt=""/>
    </div>
  )
}

export default Avatar;
