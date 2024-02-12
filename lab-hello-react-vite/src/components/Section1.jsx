function Section1 () {

    const title= {
        fontSize: "70px",
        lineHeight: "70px",
        marginBottom: "20px"
    }

    const box1={
        height: "500px",
        width: "500px",
        paddingLeft: "80px",
        paddingTop: "100px",
        fontSize: "25px",
        marginBottom: "50px",
    }

    const awesome={
        height: "80px",
        width: "150px",
        display: "flex",
        backgroundColor: "white",
        borderRadius: "5px",
        color: "darkblue",
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
        fontSize: "20px",
        marginTop: "50px"
    }
    
    return (
        <section className="section1" style={box1}>
        <h1 style={title}>Say hello to ReactJS</h1>
        <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
        <p style={awesome}>Awesome!</p>
        </section>
    )
}

export default Section1