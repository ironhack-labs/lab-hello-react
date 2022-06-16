import SingleWayImg from './images/icon3.png'

function   SingleWay (){
    return(
        <div  className='conteinerCompo'>

            <img className='Img' src={SingleWayImg} alt="Single-WayImg" /> 
            <br/>     
            <h1 className='Text1'>
                Single-Way
            </h1>
            <br/>
            <h3 className='Text2'>
                A set of immutable <br/> values are passed to <br/>
                the component´s
            </h3>
            
            
     </div>
    )
}
export default SingleWay;