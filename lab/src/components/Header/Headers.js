import React from "react";
import './Headers.css';


export default function Headers(props) {

  return (

    <div>

      <div style={{ backgroundColor: 'black', display: "flex-box", justifyContent: "space-between" }} >
        <div >
          <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/ironhack-logo-xs.png" />
        </div>
        <div>
          <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/menu-top-xs.png" />
        </div>
        <ul> Say hello to</ul>
        <ul> ReactJs</ul>
        <ul> You will learn how to use</ul>
        <ul> the most popular frontend library</ul>
        <ul> and become a super Ninja developer</ul>
        <button> Awesome!</button>
      </div>
    </div>
  )
}

