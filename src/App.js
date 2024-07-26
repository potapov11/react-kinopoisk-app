import React, { useContext } from 'react';
import Movies from './components/Movies';
import Header from './components/Header/Header';
import Preloader from './components/Preloader';
import FilmModal from './components/FilmModal';
import PaginationBlock from './components/Pagination/Pagination';
// import Pagination from './components/Pagination';
import { MovieContext } from './components/context';
import SwiperSlider from './components/Slider/Slider';
import SliderPreloader from './components/SliderPreloader/SliderPreloader';
// import { CircularProgress } from "@mui/material";
import './App.css';

function App() {
	const { movieArr, timerSlider, isLoaded, movieModalInfo, modalOpen, closeModal, searchMovie, showModal, setMovieModalInfo } = useContext(MovieContext);

	return (
		<div className="App">
			<div className="container">
				{modalOpen && <FilmModal movieModalInfo={movieModalInfo} closeModal={closeModal} />}
				{isLoaded ? (
					<>
						<div className="content">
							<Header searchFunc={searchMovie} />
							<div>
								<div style={{ display: timerSlider ? 'block' : 'none' }}>
									<SwiperSlider />
								</div>
								<div style={{ display: timerSlider ? 'none' : 'flex' }}>
									<SliderPreloader />
								</div>
							</div>
							<Movies movieArr={movieArr} showModal={showModal} setMovieModalInfo={setMovieModalInfo} />
						</div>
						<PaginationBlock />
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
