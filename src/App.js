import React, { useContext } from "react";
import Movies from "./components/Movies";
import Header from "./components/Header";
import Preloader from "./components/Preloader";
import FilmModal from "./components/FilmModal";
// import Pagination from './components/Pagination';
import { MovieContext } from "./components/context";
import SwiperSlider from "./components/Slider/Slider";
import { CircularProgress } from "@mui/material";
import "./App.css";

function App() {
  const { movieArr, timerSlider, isLoaded, movieModalInfo, modalOpen, closeModal, searchMovie, showModal, setMovieModalInfo } = useContext(MovieContext);

  console.log(timerSlider, "...timerSlider");

  return (
    <div className="App">
      <div className="container">
        {modalOpen && <FilmModal movieModalInfo={movieModalInfo} closeModal={closeModal} />}
        {isLoaded ? (
          <>
            <div className="content">
              <Header searchFunc={searchMovie} />
              <div>
                <div style={{ display: timerSlider ? "block" : "none" }}>
                  <SwiperSlider />
                </div>
                <div className="sliderPreloader" style={{ display: timerSlider ? "none" : "flex" }}>
                  <CircularProgress />
                </div>
              </div>

              <Movies movieArr={movieArr} showModal={showModal} setMovieModalInfo={setMovieModalInfo} />
            </div>

            {/* /*<Pagination movieArr={movieArr} getPageMovie={getPageMovie} />*/}
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
