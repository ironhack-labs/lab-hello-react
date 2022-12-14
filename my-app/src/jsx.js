import JSXImg from './images/icon4.png'

function   JSX (){
    return(
        <div  className='conteinerJSX'>

            <img className='Img' src={JSXImg} alt="JSXImg" /> 
            <br/>     
            <h1 className='Text1'>
                JSX
            </h1>
            
            <h3 className='Text2'>
                Statically-typed, <br/> designed to run on <br/>
                modern browsers.
            </h3>
            
            
     </div>
    )
}
export default JSX;