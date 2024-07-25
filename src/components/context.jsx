import React, { createContext, useState, useEffect } from "react";
import useSessionStorage from "../hooks/useSessionStorage.jsx";
import { API_Key, API_NEWS, API_url_popular, API_url_search, API_Movie_details } from "../constants.js";

export const MovieContext = createContext();

export const MovieDataContext = ({ children }) => {
  const [movieArr, setMovieArr] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [movieModalInfo, setMovieModalInfo] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [sliderArray, setSliderArray] = useState([]);
  const [timerSlider, setTimerSlider] = useState(false);

  console.log(timerSlider, "timerSlider in context");

  const [localState, setLocalState] = useSessionStorage("promo");

  // useEffect(() => {
  // 	setTimeout(() => {

  // }, []);

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

        const newsResponse = await fetch(API_NEWS, {
          headers: {
            "Content-Type": "application/json",
            "X-API-KEY": API_Key,
          },
        });
        const newsData = await newsResponse.json();

        setMovieArr(popularData);

        setIsLoaded(true);
        setSliderArray(newsData?.items.slice(0, 5));

        const timerOne = setTimeout(() => {
          setTimerSlider(true);
        }, 5000);

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

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".modal__card") && !e.target.closest(".movie")) {
        setModalOpen(false);
        document.body.style.overflow = "auto";
      }
    });
  }, [modalOpen]);

  // function getPageMovie(num) {
  //   const API_url_popular_page = `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=${num}`;

  //   fetch(API_url_popular_page, {
  //     headers: {
  //       "Content-Type": "application.json",
  //       "X-API-KEY": API_Key,
  //     },
  //   }).then((response) => response.json().then((data) => setMovieArr(data)));
  // }

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
        setMovieArr(data);
      });
  }

  function showModal(filmInfo) {
    fetch(API_Movie_details + filmInfo, {
      headers: {
        "Content-Type": "application.json",
        "X-API-KEY": API_Key,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setMovieModalInfo(data);
        document.body.style.overflow = "hidden";
        setModalOpen(true); // Закрываем модальное окно
      });
  }

  function closeModal() {
    setModalOpen(false); // Закрываем модальное окно
    document.body.style.overflow = "auto";
  }

  return (
    <MovieContext.Provider
      value={{
        movieArr,
        isLoaded,
        movieModalInfo,
        modalOpen,
        setMovieArr,
        setIsLoaded,
        setMovieModalInfo,
        setModalOpen,
        searchMovie,
        sliderArray,
        localState,
        showModal,
        timerSlider,
        setTimerSlider,
        closeModal,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
