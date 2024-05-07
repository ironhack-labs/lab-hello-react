import React from "react";
import "../commonStyles.css"; // common styles for each section from about React

function Declarative() {
  return (
   
    <>
      <section className="commonContainer">
        <div className="img">
        <img src="/src/assets/icon1.png" alt="Declarative" />
        </div>
        <div className="title">Declarative</div>
        <div className="p">React makes it painless to create interactive UIs.</div>
      </section>
    </>
  );
}

export default Declarative; // export to use


// id is id
// !!! be careful with className! 
// its not class="" its className="" 