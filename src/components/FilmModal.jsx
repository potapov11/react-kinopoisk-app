function FilmModal(props) {
  console.log(props, "...propsFilmModal");

  const { movieModalInfo, closeModal } = props;

  console.log(movieModalInfo, "...propsFilmModalinfoFilm");
  const infoFilm = movieModalInfo.data;

  return (
    <>
      {infoFilm && (
        <div className="modal__overlay">
          <div className="modal__card">
            <span className="modal__button-close-icon" onClick={closeModal}>
              X
            </span>
            <img
              className="modal__movie-backdrop"
              src={infoFilm.posterUrl}
              alt=""
            />
            <h2>
              <span className="modal__movie-title">
                Название {infoFilm.nameRu}
              </span>
              <span className="modal__movie-release-year">
                Год {infoFilm.year}
              </span>
            </h2>
            <ul className="modal__movie-info">
              <div className="loader"></div>
              {infoFilm.filmLength ? (
                <li className="modal__movie-runtime">
                  Время {infoFilm.filmLength}-минут
                </li>
              ) : (
                ""
              )}
              <li>
                Сайт:{" "}
                <a className="modal__movie-site" href={infoFilm.webUrl}>
                  {infoFilm.webUrl}
                </a>
              </li>
              {infoFilm.genres.map((el, index) => (
                <li className="modal__genre-item" key={index}>
                  {el.genre}
                </li>
              ))}
              <li className="modal__movie-overview">
                Описание - {infoFilm.description}
              </li>
            </ul>
            <button type="button" className="modal__button-close">
              Закрыть
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default FilmModal;
