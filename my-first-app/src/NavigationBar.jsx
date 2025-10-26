export default function NavigationBar({IconNav1, IconNav2}){
    return(
        <div className="navBar">
            <img src={IconNav1} alt="Ironhack logo"/>
            <img src={IconNav2} alt="Menu icon"/>
        </div>
    )
}