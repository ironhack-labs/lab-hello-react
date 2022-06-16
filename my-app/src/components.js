import ComponentsImg from './images/icon2.png'

function   Components (){
    return(
        <div  className='conteinerSingle'>

            <img className='Img' src={ComponentsImg} alt="ComponentsImg" /> 
            <br/>     
            <h1 className='Text1'>
                Components
            </h1>
            <br/>
            <h3 className='Text2'>
                Build encapsulated <br/> components that <br/>
                manage their state.
            </h3>
            
            
     </div>
    )
}
export default Components;