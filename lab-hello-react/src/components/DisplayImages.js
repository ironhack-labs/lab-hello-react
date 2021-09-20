import img1 from "../images/icon1.png"
import img2 from "../images/icon2.png"
import img3 from "../images/icon3.png"
import img4 from "../images/icon4.png"
import img5 from "../images/ironhack-logo-xs.png"
import img6 from "../images/menu-top-xs.png"

function DisplayImages(){
return(
    <div>
        <img src={img1} alt="image1" />
        <img src={img2} alt="image2" />
        <img src={img3} alt="image3" />
        <img src={img4} alt="image4" />
        <img src={img5} alt="image5" />
        <img src={img6} alt="image6" />
        <img src="../images/icon1.png" alt="image6" />
    </div>
)
}

export default DisplayImages