import React, { useState, useEffect } from 'react';
import Movies from './components/Movies';
import './App.css';

const API_Key = '8c8e1a50-6322-4135-8875-5d40a5420d86';
const API_url_popular = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1';
const API_url_search = 'https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=';
const API_Movie_details = 'https://kinopoiskapiunofficial.tech/api/v2.1/films/';

function App() {
	const [movieArr, setMovieArr] = useState([]);

	useEffect(() => {
		fetch(API_url_popular, {
			headers: {
				'Content-Type': 'application.json',
				'X-API-KEY': API_Key,
			},
		})
			.then((response) => response.json())
			.then((data) => {
				setMovieArr(data);
				console.log(movieArr);
			});
	}, []);

	useEffect(() => {
		console.log(movieArr);
	}, [movieArr]);

	return (
		<div className="App">
			<div className="container">
				<h2>Movie App Api Kinopoisk</h2>
				<Movies movieArr={movieArr} />
			</div>
		</div>
	);
}

export default App;
