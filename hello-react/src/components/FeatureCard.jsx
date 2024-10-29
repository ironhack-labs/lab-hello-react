

const FeatureCard = ({icon, title, desc}) => {
  return (
    <div>
        <img src={icon} alt="Icon" />
        <h2>{title}</h2>
        <p>{desc}</p>
    </div>
  )
}

export default FeatureCard