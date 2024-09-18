import React from 'react';
import SwiperSlider from '../../components/Slider/Slider';
import SliderPreloader from '../../components/SliderPreloader/SliderPreloader';
import PaginationBlock from '../../components/Pagination/Pagination';
import Movies from '../../components/Movies';
import FilmModal from '../../components/FilmModal';
import FormModal from '../../components/FormModal/FormModal';
// import Form from '../../components/Form/Form';

import { MovieContext } from '../../contecsts/context';
import { ModalContext } from '../../contecsts/contextUI';

function Home() {
	const { movieArr, timerSlider, setMovieModalInfo, checkActualLS } = React.useContext(MovieContext);
	const { showModal, modalOpen, closeModal, movieModalInfo, setisHidedForm } = React.useContext(ModalContext);

	React.useEffect(() => {
		setisHidedForm(true);
		checkActualLS();
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
			<FormModal />
			{/* <Form /> */}
		</>
	);
}

export default Home;
