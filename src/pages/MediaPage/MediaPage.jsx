import React from "react";
import { MovieContext } from "../../contecsts/context";
import style from "./style.css";

function MediaPage() {
  const { newsData } = React.useContext(MovieContext);

  console.log(newsData, "....newsData----....newsData");

  const newsSlicedData = newsData.items.slice(0, 13);

  return (
    <div className="media-page">
      <h1 className="media-page__title">Медиа портал - новости, обсуждения, подкасты</h1>

      <div className="media-page__box">
        {newsSlicedData.map((newsData, newsDataIndex) => {
          return (
            <div className={newsDataIndex == 3 || newsDataIndex == 5 || newsDataIndex == 7 ? `media-page__card card card-grid${newsDataIndex}` : "media-page__card card"}>
              <div className="card__box-img">
                <img src={newsData.imageUrl} alt="медиа" />
              </div>
              <div className="card__info">
                <p className="card__title">{newsData.title}</p>
                <div className="card__desc">{newsData.description}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MediaPage;
