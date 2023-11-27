import "./style.css"

export default function ButtonConfirm({text}) {

    return(
        <>
        <div className="btn-wrapper">
        <button className="btn-confirm"> {text} </button>
        </div>
        </>
    )
}