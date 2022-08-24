
import React, { useState } from "react"

import './Footers.css';


export default function Footers() {
  const [gridData, setGridData] = useState([
    {
      "img": "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png",
      "text": "Declarative React makes it painless to create interative Uis"
    },
    {
      "img": "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png",
      "text": "  Build encapsulated componets that manage their state"
    },
    {
      "img": "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png",
      "text": " Sigle-Way A set of immutable values are passed to the component's"
    },

  ])
  return (
    <>
      {gridData.length > 0 && (gridData.map(m => (
        <><img src={m.img} ></img>
          <ul>
            <li>{m.text}</li>
          </ul>
        </>
      )))}
    </>
  )
}

