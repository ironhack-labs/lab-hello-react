import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png";
import icon3 from "../images/icon3.png";
import icon4 from "../images/icon4.png";


function Foot (){
    const card =[
        {key:1, icon: icon1, title:'Declarative',article: 'React makes it painless to create interacyive UIs'},
        {key:2, icon: icon2, title:'Componentes',article: 'Build encapsulated componentes that manage their state'},
        {key:3, icon: icon3, title:'Single-Way',article: "A set of immutable values are passed to the component's"},
        {key:4, icon: icon4, title:'JSX',article: 'Statically-typed, designed to run browsers.'}
    ]

    return (
        card.map((e) =>{
            return <div><img src={e.icon} alt='icon1' /><h2>{e.title}</h2><article>{e.article}</article></div>
        })
      )
}

export default Foot