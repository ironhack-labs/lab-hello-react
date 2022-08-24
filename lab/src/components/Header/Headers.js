import React, { useState } from "react";
import './Headers.css';


export default function Headers() {
  const [navData, setNavData] = useState([
    { img: "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/ironhack-logo-xs.png" },
    { img: "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/menu-top-xs.png" }])
  return (
    <div>
      {navData && (navData.map(m => (<><img src={m.img}></img>
      </>)))}
      <ul> Say hello to</ul>
      <ul> ReactJs</ul>
      <ul> You will learn how to use</ul>
      <ul> the most popular frontend library</ul>
      <ul> and become a super Ninja developer</ul>
      <button> Awesome!</button>
    </div >)
}

