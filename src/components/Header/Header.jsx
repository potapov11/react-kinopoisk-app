import React from 'react';
import Favorite from '../Favorite/Favorite.jsx';
import { MovieContext } from '../../components/context.jsx';
import { Link } from 'react-router-dom';
import styles from './header.css';

function Header(props) {
	// const { searchMovie } = props;
	const DEBOUNCE_TIMER = 200;
	const { searchMovie } = React.useContext(MovieContext);

	const debounce = (callback, timer) => {
		let timeoutId;
		return (...args) => {
			clearTimeout(timeoutId);
			timeoutId = setTimeout(() => callback.apply(this, args), timer);
		};
	};

	const searchDebounceMovie = debounce((e) => {
		searchMovie(e.target.value);
	}, DEBOUNCE_TIMER);

	return (
		<header className="header container">
			<div className="header__content">
				<Link to="/" className="header__logo">
					MovieApp
				</Link>
				<form>
					<input onChange={(e) => searchDebounceMovie(e)} className="header__search" type="text" placeholder="Найти фильм" />
					<span className="header__clear"></span>
				</form>
				<Link to="FavoritePage">
					<Favorite />
				</Link>
			</div>
		</header>
	);
}

export default Header;
