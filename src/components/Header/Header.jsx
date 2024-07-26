import styles from './header.css';
import Favorite from '../../pages/Favorite/Favorite';

function Header(props) {
	const { searchFunc } = props;
	const DEBOUNCE_TIMER = 200;

	const debounce = (callback, timer) => {
		let timeoutId;
		return (...args) => {
			clearTimeout(timeoutId);
			timeoutId = setTimeout(() => callback.apply(this, args), timer);
		};
	};

	const searchDebounceMovie = debounce((e) => {
		searchFunc(e.target.value);
	}, DEBOUNCE_TIMER);

	return (
		<header className="header container">
			<div className="header__content">
				<a className="header__logo" href="index.html">
					MovieApp
				</a>
				<form>
					<input onChange={(e) => searchDebounceMovie(e)} className="header__search" type="text" placeholder="Найти фильм" />
					<span className="header__clear"></span>
				</form>
				<Favorite />
			</div>
		</header>
	);
}

export default Header;
