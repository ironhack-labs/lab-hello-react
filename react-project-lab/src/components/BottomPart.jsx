import icon1 from "../images/icon1.png"
import icon2 from "../images/icon2.png"
import icon3 from "../images/icon3.png"
import icon4 from "../images/icon4.png"


function BottomPart(){
    return(
        <div class="bottomContainer">
            <div class="block1">
                <img src={icon1} alt="icon 1" />
                <h3>Declarative</h3>
                <h5>React makes it</h5>
                <h5>painless to create</h5>
                <h5>interactive IU's.</h5>
            </div>
            <div class="block2">
                <img src={icon2} alt="icon 2" />
                <h3>Declarative</h3>
                <h5>React makes it</h5>
                <h5>painless to create</h5>
                <h5>interactive IU's.</h5>
            </div>
            <div class="block3">
                <img src={icon3} alt="icon 3" />
                <h3>Declarative</h3>
                <h5>React makes it</h5>
                <h5>painless to create</h5>
                <h5>interactive IU's.</h5>
            </div>
            <div class="block4">
            <img src={icon4} alt="icon 4" />
            <h3>Declarative</h3>
            <h5>React makes it</h5>
            <h5>painless to create</h5>
            <h5>interactive IU's.</h5>
            </div>

        </div>
    )
}



export default BottomPart;