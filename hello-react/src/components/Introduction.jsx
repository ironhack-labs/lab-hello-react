function Introduction ( { className = "" }) {
    return (
        <section className={`d-flex grid gap-4 text-white flex-column justify-content-center p-5 w-50 ${className}`}>
            <h1 className="display-2 fw-bold"> Say hello to ReactJS </h1>
            <p className="fs-5 fw-light"> You will learn how to use <br /> the most popular frontend library, <br /> and beacome a super Ninja developer.</p>
            <button className="btn btn-light text-center w-25 p-3 d-flex justify-content-center fw-bold">Awesome!</button>
        </section>
    )
}

export default Introduction;