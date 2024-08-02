import React from "react";
import styles from "./style.css";
import { MovieContext } from "../../components/context";

function Card(props) {
  const { film, showModal } = props;
  const { setRemoveToFavoriteArray } = React.useContext(MovieContext);
  // const [isCheckedFavorit, setIsChekedFavorit] = React.useState(false);

  // setRemoveToFavoriteArray(film);

  return (
    <div className="movie" onClick={(e) => showModal(e, film.filmId)}>
      <div className="like" onClick={() => setRemoveToFavoriteArray(film)}>
        <svg className="like__svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" strokeWidth="0" />
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
          <g id="SVGRepo_iconCarrier">
            <path
              // className="like__path"
              className={film.isLiked ? "checked" : "null"}
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
              fill="none"
              stroke="#ffd80e"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </div>
      <div className="movie__cover-inner">
        <img className="movie__cover" src={film.posterUrlPreview} alt={film.nameRu} />
        <div className="movie__cover--darkened"></div>
      </div>
      <div className="movie__info">
        <div className="movie__title">{film.nameRu}</div>
        <div className="movies__genres">
          {film.genres.map((genre, i) => {
            return (
              <div key={i} className="movie__category">
                {genre.genre}
              </div>
            );
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
