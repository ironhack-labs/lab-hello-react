function Teaser({ headline, imgsrc, text }) {
	return (
		<article className="teaser">
			<img src={imgsrc} alt="teaser" />
			<h2>{headline}</h2>
			<p>{text}</p>
		</article>
	);
}

export default Teaser;
