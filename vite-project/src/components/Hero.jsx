import Button from './Button'

function Hero({title, description}) {
  return (
    <div className="hero">
        <h1>{title}</h1>
        <p>{description}</p>
        <Button text="Awesome"/>
    </div>
  )
}

export default Hero