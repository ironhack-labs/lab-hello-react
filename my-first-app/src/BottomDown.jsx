export default function BottomDown({logo, header, text}){
    return(
        <>
            <div className="singleBoxArea">
                <img src={logo} alt={header}/>
                <h3>{header}</h3>
                <p>{text}</p>
            </div>
        </>
    )
}