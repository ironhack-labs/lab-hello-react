import ImageOne from "../images/icon1.png"
import ImageTwo from "../images/icon2.png"
import ImageThree from "../images/icon3.png"
import ImageFour from "../images/icon4.png"

const feature1 = {
    img: ImageOne,
    title: "Declarative",
    description: "React makes it painless to create interactive UIs"
}

const feature2 = {
    img: ImageTwo,
    title: "Components",
    description: "Build encapsulated components that manage their state."
}

const feature3 = {
    img: ImageThree,
    title: "Single-Way",
    description: "A set of immutable values are passed to the component's."
}

const feature4 = {
    img: ImageFour,
    title: "JSX",
    description: "Statically-typed, designed to run on modern browsers."
}



function Features(){
    return (
    <div class="features">
        <div class="feature">
            <img src={feature1.img} alt="icon"/>
            <h5>{feature1.title}</h5>
            <p>{feature1.description}</p>
        </div>

         <div class="feature">
            <img src={feature2.img} alt="icon"/>
            <h5>{feature2.title}</h5>
            <p>{feature2.description}</p>
        </div>

         <div class="feature">
            <img src={feature3.img} alt="icon"/>
            <h5>{feature3.title}</h5>
            <p>{feature3.description}</p>
        </div>

        <div class="feature">
            <img src={feature4.img} alt="icon"/>
            <h5>{feature4.title}</h5>
            <p>{feature4.description}</p>
        </div>
    </div>
    )
}

export default Features;

