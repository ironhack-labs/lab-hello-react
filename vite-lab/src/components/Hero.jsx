import MyButton from './MyButton';
import Navbar from './Navbar';

function Hero() {
  return (
     
    <div className='text-left text-white max-w-screen mt-60'>
      <Navbar />
      <div className="bg-zinc-800 md:col-auto md:items-center md:justify-between">
        <h1 className='text-8xl font-bold py-10'>Say hello to ReactJS w/ Tailwind</h1>
        <p className=''> You will learn how to use the most popular frontend library, and become a super Ninja developer</p>
        <MyButton /> 
      </div>   
    </div>
  )
}

export default Hero
