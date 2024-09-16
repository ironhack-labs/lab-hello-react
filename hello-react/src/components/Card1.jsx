import ImgCard from "../assets/icon2.png"

function Card1(){
  return (
    <div className="card"> 

    <img src={ImgCard} alt="" className="logo react"/>
    <h3>Declarative</h3>
    <p>React makes it painless to creato interactive UIs</p>
  </div>
  )
}

export default Card1