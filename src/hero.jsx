import './hero.css';

function Hero({ claim, description, ctaText, ctaUrl }) {
  return (
    <section className='hero'>
      <div className='hero-content'>
        <h2 className='hero-title'>{claim}</h2>
        <p className='hero-txt'>{description}</p>

        <a href={ctaUrl} className='hero-cta'>{ctaText}</a>
      </div>
    </section>
  );
}

export default Hero;