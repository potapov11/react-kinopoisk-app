import React, { createContext, useState, useEffect } from "react";
import useSessionStorage from "../hooks/useSessionStorage.jsx";
import { API_Key, API_NEWS, API_url_popular, API_url_search, API_Movie_details } from "../constants.js";

export const MovieContext = createContext();

export const MovieDataContext = ({ children }) => {
  const [movieArr, setMovieArr] = useState([]);
  const [movieArrInfo, setMovieArrInfo] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [sliderArray, setSliderArray] = useState([]);
  const [newsData, setNewsData] = useState([]);
  const [actualLS, setActualLS] = useState([]);
  const [timerSlider, setTimerSlider] = useState(false);
  const [localState, setLocalState] = useSessionStorage("promo");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const popularResponse = await fetch(API_url_popular, {
          headers: {
            "Content-Type": "application/json",
            "X-API-KEY": API_Key,
          },
        });
        const popularData = await popularResponse.json();

        setMovieArrInfo(popularData);

        let { films } = popularData;

        let filmsWithLikes = films.map((filmItem) => {
          return { ...filmItem, isLiked: false };
        });

        console.log(films, "...updatedFilms...");

        const newsResponse = await fetch(API_NEWS, {
          headers: {
            "Content-Type": "application/json",
            "X-API-KEY": API_Key,
          },
        });
        const newsData = await newsResponse.json();

        setMovieArr(filmsWithLikes);

        setNewsData(newsData);

        setIsLoaded(true);

        setSliderArray(newsData?.items.slice(0, 5));

        const timerOne = setTimeout(() => {
          setTimerSlider(true);
        }, 2000);

        return () => clearTimeout(timerOne);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (localState === "true") {
      fetchData();
    } else {
      const timer = setTimeout(() => {
        fetchData();
        setLocalState("true");
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [localState]);

  function setLike(id) {
    const likedArray = movieArr.map((item) => {
      if (item.filmId == id) {
        console.log(item, "item");
        return { ...item, isLiked: !item.isLiked };
      } else {
        return item;
      }
    });
    setMovieArr(likedArray);

    updateLS(id);
  }

  function checkActualLS() {
    const arrLS = localStorage.getItem("favoriteArray") !== null ? JSON.parse(localStorage.getItem("favoriteArray")) : [];
    setActualLS(arrLS);
  }

  function updateLS(id) {
    let arrLS = localStorage.getItem("favoriteArray") !== null ? JSON.parse(localStorage.getItem("favoriteArray")) : [];

    if (arrLS) {
      let idExistInArr = arrLS.some((item) => item.filmId == id);
      if (!idExistInArr) {
        const targetFilm = movieArr.find((item) => item.filmId == id);
        console.log(targetFilm, "targetFilm");
        arrLS = [...arrLS, targetFilm];
      } else {
        arrLS = arrLS.filter((item) => item.filmId !== id);
      }
    }

    localStorage.setItem("favoriteArray", JSON.stringify(arrLS));
  }

  function searchMovie(value) {
    const apiSearcUrl = `${API_url_search}${value}`;

    fetch(value ? apiSearcUrl : API_url_popular, {
      headers: {
        "Content-Type": "application.json",
        "X-API-KEY": API_Key,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data, "dataSearch");
        setMovieArr(data.films);
      });
  }

  return (
    <MovieContext.Provider
      value={{
        movieArr,
        isLoaded,
        setMovieArr,
        setIsLoaded,
        searchMovie,
        sliderArray,
        localState,
        timerSlider,
        setTimerSlider,
        setLike,
        updateLS,
        checkActualLS,
        actualLS,
        newsData,
        movieArrInfo,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
