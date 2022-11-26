
function FooterBox(props){
    const {boxClass, image, title, content } = props
    return(
        <div className={boxClass}>
            <img src={image} alt="declarative" />
            <div className="title">{title}</div>
            <div className="content">{content}</div>
         </div>
    );
}

export default FooterBox;