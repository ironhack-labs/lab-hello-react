import React from "react";

function Cards(props) {
  // console.log(props.cardsObj.image);
  const { image } = props.cardsObj;
  // console.log(props.cardsObj);
  // console.log(image);
  let imagenString;
  for (let img in image) {
    imagenString = image[img];
    // console.log(image[img]);
  }

  return (
    <>
      <img className="img-card" src={imagenString} alt={props.cardsObj.image} />
      <p className="title-card">
        <b>{props.cardsObj.name}</b>
      </p>
      <p className="container-card">{props.cardsObj.description}</p>
    </>
  );
}

export default Cards;
