function Features({ features }) {
  console.log(features);
  return (
    <article className='features'>
      {features.map((e, i) => {
        return (
          <div key={i}>
            <img src={e.image} alt={e.title} />
            <h3>{e.title}</h3>
            <p>{e.content}</p>
          </div>
        );
      })}
    </article>
  );
}

export default Features;
