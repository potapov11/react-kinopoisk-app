import Card from "./Card";

function Movies(props) {
  const { movieArr, showModal, setMovieModalInfo } = props;

  if (!movieArr || !movieArr.films) {
    return null; // Можно вернуть заглушку или другое сообщение, если данные еще не загружены
  }

  // console.log(movieArr);
  // console.log(movieArr.films);

  const arrFilms = movieArr.films;

  // console.log(arrFilms);

  return (
    <div style={{ marginTop: "100px" }} className="movies">
      {arrFilms.length > 0 &&
        arrFilms.map((film) => {
          return <Card key={film.filmId} film={film} showModal={showModal} setMovieModalInfo={setMovieModalInfo} />;
        })}
    </div>
  );
}

export default Movies;
