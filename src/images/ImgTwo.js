import React from 'react';
import icon2 from './icon2.png';
function ImgTwo() {
    return (
      React.createElement(
        "div",
        {
          className: "galinto"
        },

        React.createElement("img", {
          src: icon2,
          alt: "icon2"
        }),
        React.createElement("h2", null, "Components"),
        React.createElement("p", null, "Build encapsulated components that manage their state."),

      ))};
  
  export default ImgTwo;
  