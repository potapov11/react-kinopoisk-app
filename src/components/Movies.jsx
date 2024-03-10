import Card from './Card';

function Movies(props) {
	const { movieArr } = props;

	if (!movieArr || !movieArr.films) {
		return null; // Можно вернуть заглушку или другое сообщение, если данные еще не загружены
	}

	// console.log(movieArr);
	// console.log(movieArr.films);

	const arrFilms = movieArr.films;

	// console.log(arrFilms);

	return (
		<div className="movies">
			{arrFilms.length > 0 &&
				arrFilms.map((film) => {
					return <Card key={film.filmId} film={film} />;
				})}
		</div>
	);
}

export default Movies;
