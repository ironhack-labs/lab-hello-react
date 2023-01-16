function Feature(props) {
    const { data } = props;
    
    console.log(data.src)
    return(
        <div className="feature">
            <img src={ data.src } alt={ 'feature-' + data.id } />
            <h2>{ data.title }</h2>
            <p>{ data.content }</p>
        </div>
    )
};

export default Feature;