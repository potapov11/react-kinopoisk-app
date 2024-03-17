import React, { useState } from 'react';

function FilmModal(props) {
	const [spanOpen, setSpanOpen] = useState(false);

	function setSpanOpenShow() {
		setSpanOpen(!spanOpen);
	}

	const { movieModalInfo, closeModal } = props;
	const infoFilm = movieModalInfo.data;

	return (
		<>
			{infoFilm && (
				<div className="modal__overlay">
					<div className="modal__card">
						<span className="modal__button-close-icon" onClick={closeModal}></span>
						<img className="modal__movie-backdrop" src={infoFilm.posterUrl} alt="" />
						<h2 className="modal__title">
							<span className="modal__movie-title">Название {infoFilm.nameRu}</span>
							<span className="modal__movie-release-year">Год {infoFilm.year}</span>
						</h2>
						<ul className="modal__movie-info">
							<div className="loader"></div>
							{/* {infoFilm.filmLength ? <li className="modal__movie-runtime">Время {infoFilm.filmLength}-минут</li> : ''} */}
							<li>
								Сайт:{' '}
								<a className="modal__movie-site" href={infoFilm.webUrl}>
									{infoFilm.webUrl}
								</a>
							</li>
							<li className="modal__genres">
								{' '}
								Жанры:
								{infoFilm.genres.map((el, index) => (
									<li className="modal__genre-item" key={index}>
										{el.genre}
									</li>
								))}
							</li>
							<li className="modal__movie-overview">
								<span className="modal__movie-overview-show" onClick={setSpanOpenShow}>
									{spanOpen ? 'Свернуть описание' : 'Развернуть описание'}
								</span>
								{spanOpen && <span>Описание - {infoFilm.description}</span>}
							</li>
						</ul>
					</div>
				</div>
			)}
		</>
	);
}

export default FilmModal;
