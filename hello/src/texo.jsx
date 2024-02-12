

import ironIcon from "./assets/ironhack-logo-xs.png"
import menuIcon from "./assets/menu-top-xs.png" 

const generalStyle = {
    backgroundColor: "#4A235A", 
    width: "800px",
    textAlign: "left",
    padding: "50px"
  }

const styleH1 = {
     
    color: "white", 
    fontSize: "3em",
    marginBottom: "0"
}

const h4Style = {
    backgroundColor: "white",
    color: "darkblue", 
    width: "150px", 
    textAlign: "center",
    padding: "10px"


}

function Texto () {
    return (
        <div style={generalStyle}>
            <img src={ironIcon} alt="ironhack-icon" />
            <img style={{float: "right"}}src={menuIcon} alt="imenu" />
            <div>
                <h1 style={styleH1}>Say hello to </h1>
                <h1 style={styleH1}>ReactJS</h1>
            </div>
            
            <p>You will learn how to use </p>
            <p>the most popular frontend library,</p>
            <p> and become a super Ninja developer</p>
            <h4 style={h4Style}>Awesome!</h4>
        </div>
    )
}

export default Texto