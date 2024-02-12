import icon1 from "./assets/icon1.png"
import icon2 from "./assets/icon2.png"
import icon3 from "./assets/icon3.png"
import icon4 from "./assets/icon4.png"

const style = {
    width: "60px",
    display: "flex",
    flexDirection: "row",
    marginLeft: "10px",
    padding: "20px",
    marginTop: "50px"
}

function Images () {

    return (
        <div style={style} >
            <img style={{paddingLeft: "15px"}}src={icon1} alt="icon1" />
            <img style={{paddingLeft: "15px"}}src={icon2} alt="icon2" />
            <img style={{paddingLeft: "15px"}}src={icon3} alt="icon3" />
            <img style={{paddingLeft: "15px"}}src={icon4} alt="icon4" />
        </div>
    )
}

export default Images