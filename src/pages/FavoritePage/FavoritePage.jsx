import React from "react";
import { useState, useEffect } from "react";
import FavoriteCard from "../../components/FavoriteCard/FavoriteCard.jsx";
import { MovieContext } from "../../contecsts/context.jsx";
// import { ModalContext } from "../../contecsts/contextUI.jsx";

function FavoritePage() {
  const { favoriteArray, setisHidedForm } = React.useContext(MovieContext);

  console.log(setisHidedForm);

  const [movieArray, setMovieArray] = useState([]);

  function checkLS() {
    if (setisHidedForm) {
      setisHidedForm(false);
    }
    const arrLS = localStorage.getItem("favoriteArray") !== null ? JSON.parse(localStorage.getItem("favoriteArray")) : [];
    setMovieArray(arrLS);
  }

  useEffect(() => {
    checkLS();
  }, []);

  return (
    <>
      <h1 style={{ marginTop: "50px" }}>{movieArray.length > 0 ? "Избранные фильмы" : "Добавьте фильмы в избранное"}</h1>
      <div style={{ marginTop: "50px" }} className="movies">
        {movieArray.length > 0 &&
          movieArray.map((film) => {
            return <FavoriteCard key={film.filmId} film={film} checkLS={checkLS} />;
          })}
      </div>
    </>
  );
}

export default FavoritePage;
