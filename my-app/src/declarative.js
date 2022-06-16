import DeclarativeImg from './images/icon1.png'

function Declarative(){
    return (
     <div  className='conteinerDeclar'>

            <img className='Img' src={DeclarativeImg} alt="DeclarativeImg" /> 
            <br/>     
            <h1 className='Text1'>
                Declarative
            </h1>
  
            <h3 className='Text2'>
                React makes it <br/> painless to create <br/>
                interactive UIs.
            </h3>
            
            
     </div>
    )
}

export default Declarative;