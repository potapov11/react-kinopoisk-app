import React, { useState, useEffect } from "react";
import Movies from "./components/Movies";
import Header from "./components/Header";
import Preloader from "./components/Preloader";
import FilmModal from "./components/FilmModal";
import Pagination from "./components/Pagination";

import "./App.css";

const API_Key = "72268c3c-1c09-47f4-a0ae-f246d567a119";
const API_url_popular =
  "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1";
const API_url_search =
  "https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=";
const API_Movie_details = "https://kinopoiskapiunofficial.tech/api/v2.1/films/";

function App() {
  const [movieArr, setMovieArr] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [movieModalInfo, setMovieModalInfo] = useState([]);
  // const [modalOpenState, setModalOpenState] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      fetch(API_url_popular, {
        headers: {
          "Content-Type": "application.json",
          "X-API-KEY": API_Key,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setMovieArr(data);
          setIsLoading(true);
          console.log(movieArr);
        });
    }, 2000);
  }, []);

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".modal__card") && !e.target.closest(".movie")) {
        setModalOpen(false);
        document.body.style.overflow = "auto";
      }
    });
  }, [modalOpen]);

  function getPageMovie(num) {
    const API_url_popular_page = `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=${num}`;

    fetch(API_url_popular_page, {
      headers: {
        "Content-Type": "application.json",
        "X-API-KEY": API_Key,
      },
    }).then((response) => response.json().then((data) => setMovieArr(data)));
  }

  function SearchMovie(value) {
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
        console.log(movieArr);
      });
  }

  function showModal(filmInfo) {
    console.log(filmInfo, "...filmInfo");

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
    <div className="App">
      <div className="container">
        {modalOpen && (
          <FilmModal movieModalInfo={movieModalInfo} closeModal={closeModal} />
        )}
        {isLoading ? (
          <>
            <div className="content">
              <Header searchFunc={SearchMovie} />
              <Movies
                movieArr={movieArr}
                showModal={showModal}
                setMovieModalInfo={setMovieModalInfo}
              />
            </div>
            <Pagination movieArr={movieArr} getPageMovie={getPageMovie} />
          </>
        ) : (
          <div className="loader">
            <Preloader />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
