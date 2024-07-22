import React, { useContext } from 'react';
import Movies from './components/Movies';
import Header from './components/Header';
import Preloader from './components/Preloader';
import FilmModal from './components/FilmModal';
// import Pagination from './components/Pagination';
import { MovieContext } from './components/context';
import SwiperSlider from './components/Slider/Slider';
import './App.css';

function App() {
	const { movieArr, isLoading, movieModalInfo, modalOpen, closeModal, searchMovie, showModal, setMovieModalInfo } = useContext(MovieContext);

	return (
		<div className="App">
			<div className="container">
				{modalOpen && <FilmModal movieModalInfo={movieModalInfo} closeModal={closeModal} />}
				{isLoading ? (
					<>
						<div className="content">
							<Header searchFunc={searchMovie} />
							<SwiperSlider style={{ margin: '20px' }} />
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
