import React from 'react';
import icon3 from './icon3.png';
function ImgThree() {
    return (
      React.createElement(
        "div",
        {
          className: "galinto"
        },

        React.createElement("img", {
          src: icon3,
          alt: "icon3"
        }),
        React.createElement("h2", null, "Single-Way"),
        React.createElement("p", null, "A Set of immutable values are passed to the component's."),

      ))};
  
  export default ImgThree;
  