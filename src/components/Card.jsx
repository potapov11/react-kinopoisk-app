function Card(props) {
	console.log(props);

	const { film } = props;

	console.log(film.genres);

	return (
		<div className="movie">
			<div className="movie__cover-inner">
				{/* <img className="movie__cover" src="${movie.posterUrlPreview}" alt="${movie.nameRu}" /> */}
				<img className="movie__cover" src={film.posterUrlPreview} alt={film.nameRu} />
				<div className="movie__cover--darkened"></div>
			</div>
			<div className="movie__info">
				<div className="movie__title">{film.nameRu}</div>
				{film.genres.map((genre) => {
					return <div className="movie__category">{genre.genre}</div>;
				})}
			</div>
		</div>
	);
}

export default Card;
