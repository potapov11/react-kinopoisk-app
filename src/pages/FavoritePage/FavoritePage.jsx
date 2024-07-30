import React from 'react';
import FavoriteCard from '../../components/FavoriteCard/FavoriteCard.jsx';
import { MovieContext } from '../../components/context.jsx';

function FavoritePage() {
	const { favoriteArray, setisHidedForm } = React.useContext(MovieContext);
	const [favoritStateArr, setFavoriteStateArr] = React.useState(JSON.parse(localStorage.getItem('favoriteArray')) || []);

	React.useEffect(() => {
		setisHidedForm(false);
	}, []);

	// Обновляем favoritStateArr при изменении favoriteArray
	React.useEffect(() => {
		setFavoriteStateArr(favoriteArray);
		localStorage.setItem('favoriteArray', JSON.stringify(favoriteArray));
	}, [favoriteArray]);

	console.log(favoriteArray, '...favoriteArray--------');
	console.log(favoritStateArr, '...favoritStateArr...');

	return (
		<>
			<h1 style={{ marginTop: '50px' }}>{favoriteArray.length > 0 ? 'Избранные фильмы' : 'Добавьте фильмы в избранное'}</h1>
			<div style={{ marginTop: '50px' }} className="movies">
				{favoritStateArr.length > 0 &&
					favoritStateArr.map((film) => {
						return <FavoriteCard key={film.filmId} film={film} />;
					})}
			</div>
		</>
	);
}

export default FavoritePage;
