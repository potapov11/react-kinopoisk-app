function Header(props) {
	console.log(props);

	const { searchFunc } = props;

	return (
		<header className="header container">
			<div className="header__content">
				<a className="header__logo" href="index.html">
					MovieApp
				</a>
				<form>
					<input onChange={(e) => searchFunc(e.target.value)} className="header__search" type="text" placeholder="Найти фильм" />
					<span className="header__clear"></span>
				</form>
			</div>
		</header>
	);
}

export default Header;
