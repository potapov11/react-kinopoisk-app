import React from 'react';
import styles from './style.css';
import { MovieContext } from '../../components/context';
import { ClearIcon } from '@mui/material';

function FavoriteCard(props) {
	const { film } = props;
	// const { setToFavoriteArray, removeFromFavoriteArray } = React.useContext(MovieContext);
	// const [isCheckedFavorit, setIsChekedFavorit] = React.useState(false);

	return (
		<div className="movie">
			<ClearIcon />
			<div className="movie__cover-inner">
				<img className="movie__cover" src={film.posterUrlPreview} alt={film.nameRu} />
				<div className="movie__cover--darkened"></div>
			</div>
			<div className="movie__info">
				<div className="movie__title">{film.nameRu}</div>
				<div className="movies__genres">
					{film.genres.map((genre, i) => {
						return (
							<div key={i} className="movie__category">
								{genre.genre}
							</div>
						);
					})}
				</div>
				{film.rating !== null &&
					film.rating !== 'null' &&
					!film.rating.includes('%') &&
					(Number(film.rating) >= 7 ? <div className="movie__average movie__average--green">{film.rating}</div> : <div className="movie__average movie__average--orange">{film.rating}</div>)}
			</div>
		</div>
	);
}

export default FavoriteCard;
