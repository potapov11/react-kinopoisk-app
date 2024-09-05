import { useState, useEffect } from "react";
import Card from "./Card/Card";

function Movies(props) {
  const { movieArr, showModal, setMovieModalInfo } = props;

  const [favoriteArray, setFavoriteArray] = useState([]);

  useEffect(() => {
    console.log(movieArr, "...movieArr in useEf");

    let arrLS = localStorage.getItem("favoriteArray") !== null ? JSON.parse(localStorage.getItem("favoriteArray")) : [];

    console.log(arrLS, "arrls in UE");

    if (arrLS) {
      setFavoriteArray(
        movieArr.map((item) => {
          const idExist = arrLS.some((itemLS) => itemLS.filmId == item.filmId);
          if (idExist) {
            return { ...item, isLiked: true };
          } else {
            return { ...item, isLiked: false };
          }
        })
      );
    } else {
      setFavoriteArray(movieArr);
    }
  }, [movieArr]);

  return (
    <div style={{ marginTop: "50px" }} className="movies">
      {movieArr.length > 0 &&
        favoriteArray.map((film) => {
          return <Card key={film.filmId} film={film} showModal={showModal} setMovieModalInfo={setMovieModalInfo} />;
        })}
    </div>
  );
}

export default Movies;
