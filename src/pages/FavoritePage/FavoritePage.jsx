import React from "react";
import { useState, useEffect } from "react";
import FavoriteCard from "../../components/FavoriteCard/FavoriteCard.jsx";
import { MovieContext } from "../../components/context.jsx";

function FavoritePage() {
  const { favoriteArray, setisHidedForm } = React.useContext(MovieContext);
  const [movieArray, setMovieArray] = useState([]);

  useEffect(() => {
    setisHidedForm(false);
    const arrLS = localStorage.getItem("favoriteArray") !== null ? JSON.parse(localStorage.getItem("favoriteArray")) : [];
    setMovieArray(arrLS);

    console.log(movieArray, "movieArray in fav");
  }, []);

  return (
    <>
      <h1 style={{ marginTop: "50px" }}>{movieArray.length > 0 ? "Избранные фильмы" : "Добавьте фильмы в избранное"}</h1>
      <div style={{ marginTop: "50px" }} className="movies">
        {movieArray.length > 0 &&
          movieArray.map((film) => {
            return <FavoriteCard key={film.filmId} film={film} />;
          })}
      </div>
    </>
  );
}

export default FavoritePage;
