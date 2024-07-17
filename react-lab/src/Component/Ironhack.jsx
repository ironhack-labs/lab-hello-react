
function Ironhack({className }){
    let title = "Say hello to"
    let title2 = "ReactJS"
    let desc1 = "You will learn how to use  "
    let desc2 = "the most popular frontend library,"
    let desc3 = "and become a super Ninja developer."

return(

    <div className={className}>
        <h1>{title}</h1>
        <h1>{title2}</h1>
        <p>{desc1}</p>
        <p>{desc2}</p>
        <p>{desc3}</p>
    </div>
)
}

export default Ironhack