import React from 'react';
import { Pagination } from '@mui/material';
import { API_Key } from '../../constants';
import { MovieContext } from '../../components/context';

function PaginationBlock() {
	const { movieArr, setMovieArr } = React.useContext(MovieContext);

	const handlePageChange = (event, value) => {
		getPageMovie(value);
	};

	function getPageMovie(num) {
		const API_url_popular_page = `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=${num}`;

		fetch(API_url_popular_page, {
			headers: {
				'Content-Type': 'application.json',
				'X-API-KEY': API_Key,
			},
		}).then((response) => response.json().then((data) => setMovieArr(data)));
	}

	return (
		<>
			<Pagination count={movieArr.pagesCount} onChange={handlePageChange} variant="outlined" shape="rounded" />
		</>
	);
}

export default PaginationBlock;
