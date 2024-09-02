import { useEffect } from 'react';
import Card from './Card/Card';

function Movies(props) {
	const { movieArr, showModal, setMovieModalInfo } = props;

	useEffect(() => {
		console.log('Компонент Movies отрисовался');
	});

	return (
		<div style={{ marginTop: '50px' }} className="movies">
			{movieArr.length > 0 &&
				movieArr.map((film) => {
					return <Card key={film.filmId} film={film} showModal={showModal} setMovieModalInfo={setMovieModalInfo} />;
				})}
		</div>
	);
}

export default Movies;
