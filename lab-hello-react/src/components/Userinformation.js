function UserItem ({img,tittle,context,...props}){
    return(
        <div className="cardInfo">
            <img src={img}></img>
            <h3>{tittle}</h3>
            <p>{context}</p>
        </div>

    )
}

export default UserItem