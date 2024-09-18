import React, { useEffect, useState } from 'react';
import { Pagination } from '@mui/material';
import { MovieContext } from '../../contecsts/context';
import useFetch from '../../hooks/useFetch';
import './pagination.css';
import { API_Key } from '../../constants';
const headers = {
	headers: {
		'Content-Type': 'application/json',
		'X-API-KEY': API_Key,
	},
};

function PaginationBlock() {
	const { movieArrInfo, setMovieArr } = React.useContext(MovieContext);
	// const API_url_popular_page = `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=${currentPage}`;

	async function fetchPaginationData(url) {
		try {
			const response = await fetch(url, headers);

			console.log(response, 'response');
			if (!response.ok) {
				throw new Error('Произошла ошибка в запросе');
			}
			const data = await response.json();

			setMovieArr(data.films);
		} catch (err) {
			console.log(err.message);
		}
	}

	const handlePageChange = (event, value) => {
		const API_url_popular_page = `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=${value}`;
		fetchPaginationData(API_url_popular_page);
	};

	return (
		<>
			{/* {error && <div>Error: {error.message}</div>} */}
			<Pagination count={movieArrInfo.pagesCount} onChange={handlePageChange} variant="outlined" shape="rounded" className="background-lite" />
		</>
	);
}

export default PaginationBlock;
