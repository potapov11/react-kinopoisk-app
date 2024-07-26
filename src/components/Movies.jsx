import Card from './Card/Card';

function Movies(props) {
	const { movieArr, showModal, setMovieModalInfo } = props;

	if (!movieArr || !movieArr.films) {
		return null; // Можно вернуть заглушку или другое сообщение, если данные еще не загружены
	}

	const arrFilms = movieArr.films;

	return (
		<div style={{ marginTop: '50px' }} className="movies">
			{arrFilms.length > 0 &&
				arrFilms.map((film) => {
					return <Card key={film.filmId} film={film} showModal={showModal} setMovieModalInfo={setMovieModalInfo} />;
				})}
		</div>
	);
}

export default Movies;
