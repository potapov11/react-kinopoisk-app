import { useEffect, useState, useContext } from "react";
import { MovieContext } from "./context";
import Card from "./Card/Card";

function Movies(props) {
  const { movieArr, showModal, setMovieModalInfo } = props;
  const { favoriteArray } = useContext(MovieContext);
  const [arr, setArr] = useState([]);

  useEffect(() => {
    const LSarray = JSON.parse(localStorage.getItem("favoriteArray")) || [];

    const updatedFilms = movieArr.films.map((item) => {
      const isLiked = LSarray.some((itemLS) => item.filmId === itemLS.filmId);
      return { ...item, isLiked };
    });

    setArr(updatedFilms);
  }, [favoriteArray]);

  useEffect(() => {
    console.log("Компонент Movies отрисовался");
  });

  return (
    <div style={{ marginTop: "50px" }} className="movies">
      {arr.length > 0 &&
        arr.map((film) => {
          return <Card key={film.filmId} film={film} showModal={showModal} setMovieModalInfo={setMovieModalInfo} />;
        })}
    </div>
  );
}

export default Movies;
