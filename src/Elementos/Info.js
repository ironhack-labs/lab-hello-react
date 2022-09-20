import icon1 from "../images/icon1.png"
import icon2 from "../images/icon2.png"
import icon3 from "../images/icon3.png"
import icon4 from "../images/icon4.png"

function Info() {
    return (
        <div className="info">
            {airbnb(cards)}
        </div>
    )
}

const cards = [
    {
        image: icon1,
        title: "Declarative",
        text: "React makes it painless to create interactive UIs.",
    },
    {
        image: icon2,
        title: "Components",
        text: "Build encapsulated component that manage their state",
    },
    {
        image: icon3,
        title: "Single-Way",
        text: "A set of immutable values are passed to the components"
    },
    {
        image: icon4,
        title: "JSX",
        text: "Statically-typed, designed to run on modern browsers"
    }
]

function airbnb(arrDatos){

const arrCards = arrDatos.map((carta,index) => {
    return (
    <div className="card">
        <img src={carta.image} alt="" className="img"/>
        <h3>{carta.title}</h3>
        <p>{carta.text}</p>
    </div>
        )
} );
return arrCards;
}

export default Info;