import './IconBody.css'

function IconBody({image, title, text}){

  return (
    <div className='icons-body m-2'>

      <img className='iconbody-image' src={ image } alt="" />
      <h2 className='iconbody-title'>{title}</h2>
      <p className='iconbody-text'>{text}</p>

    </div>
  )

}

export default IconBody;