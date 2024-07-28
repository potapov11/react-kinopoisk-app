import React from 'react';
import SwiperSlider from '../../components/Slider/Slider';
import SliderPreloader from '../../components/SliderPreloader/SliderPreloader';
import PaginationBlock from '../../components/Pagination/Pagination';
import Movies from '../../components/Movies';
import FilmModal from '../../components/FilmModal';

import { MovieContext } from '../../components/context';

function Home() {
	const { movieArr, timerSlider, showModal, setMovieModalInfo, movieModalInfo, modalOpen, closeModal, setisHidedForm, isHidedForm } = React.useContext(MovieContext);

	React.useEffect(() => {
		setisHidedForm(true);

		console.log(isHidedForm, '...isHidedForm in Home');
	}, []);

	return (
		<>
			{modalOpen && <FilmModal movieModalInfo={movieModalInfo} closeModal={closeModal} />}
			<div>
				<div style={{ display: timerSlider ? 'block' : 'none' }}>
					<SwiperSlider />
				</div>
				<div style={{ display: timerSlider ? 'none' : 'flex' }}>
					<SliderPreloader />
				</div>
			</div>
			<Movies movieArr={movieArr} showModal={showModal} setMovieModalInfo={setMovieModalInfo} />
			<PaginationBlock />
		</>
	);
}

export default Home;
