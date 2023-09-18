function Gallery({ image, texthead, text }) {
  return (
    <div id="gallery-container">
      <img src={image} alt="icon" />
      <h3 className="icon-mtext">{texthead}</h3>
      <p className="icon-stext">{text}</p>
    </div>
  );
}

export default Gallery;

// function Gallery ({image, texthead, text}) {
//     return (

//     <div id="gallery-container">

//         <img src={image} alt="icon"/>
//         <h3 class="icon-mtext">{texthead}</h3>
//         <p class="icon-stext">{text}</p>
//         <img src={icon2} alt="icon2"/>
//         <h3 class="icon-text">Component</h3>
//         <p class="icon-stext">Build encapsulated...</p>
//         <img src={icon3} alt="icon3"/>
//         <h3 class="icon-text">Single-Way</h3>
//         <p class="icon-stext">A set of ...</p>
//         <img src={icon4} alt="icon4"/>
//         <h3 class="icon-text">JSX</h3>
//         <p class="icon-stext">Statically-typed..</p>
//     </div>
//     );
//     }

//     export default Gallery;
