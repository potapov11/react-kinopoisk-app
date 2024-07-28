import React from 'react';
import FavoriteCard from '../../components/FavoriteCard/FavoriteCard.jsx';
import { MovieContext } from '../../components/context.jsx';

function FavoritePage() {
	const { favoriteArray } = React.useContext(MovieContext);

	console.log(favoriteArray, '...favoriteArray');

	return (
		<>
			<h1 style={{ marginTop: '50px' }}>{favoriteArray.length > 0 ? 'Избранные фильмы' : 'Добавьте фильмы в избранное'}</h1>
			<div style={{ marginTop: '50px' }} className="movies">
				{favoriteArray.length > 0 &&
					favoriteArray.map((film) => {
						return <FavoriteCard key={film.filmId} film={film} />;
						// return <p>{film.nameRu}</p>;
					})}
			</div>
		</>
	);
}

export default FavoritePage;
