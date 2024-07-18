function Card(props) {
  // console.log(props);

  const { film, showModal } = props;

  console.log(film.rating);
  console.log(typeof film.rating);

  return (
    <div className="movie" onClick={() => showModal(film.filmId)}>
      <div className="movie__cover-inner">
        {/* <img className="movie__cover" src="${movie.posterUrlPreview}" alt="${movie.nameRu}" /> */}
        <img className="movie__cover" src={film.posterUrlPreview} alt={film.nameRu} />
        <div className="movie__cover--darkened"></div>
      </div>
      <div className="movie__info">
        <div className="movie__title">{film.nameRu}</div>
        <div className="movies__genres">
          {film.genres.map((genre) => {
            return <div className="movie__category">{genre.genre}</div>;
          })}
        </div>
        {film.rating !== null &&
          film.rating !== "null" &&
          !film.rating.includes("%") &&
          (Number(film.rating) >= 7 ? <div className="movie__average movie__average--green">{film.rating}</div> : <div className="movie__average movie__average--orange">{film.rating}</div>)}
      </div>
    </div>
  );
}

export default Card;
