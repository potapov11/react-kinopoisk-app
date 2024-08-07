import React, { createContext, useState, useEffect } from 'react';
import useSessionStorage from '../hooks/useSessionStorage.jsx';
import { API_Key, API_NEWS, API_url_popular, API_url_search, API_Movie_details } from '../constants.js';

export const MovieContext = createContext();

export const MovieDataContext = ({ children }) => {
	const [movieArr, setMovieArr] = useState([]);
	const [isLoaded, setIsLoaded] = useState(false);
	const [movieModalInfo, setMovieModalInfo] = useState([]);
	const [modalOpen, setModalOpen] = useState(false);
	const [sliderArray, setSliderArray] = useState([]);
	const [newsData, setNewsData] = useState([]);
	const [timerSlider, setTimerSlider] = useState(false);
	const [isHidedForm, setisHidedForm] = useState(false);
	const [localState, setLocalState] = useSessionStorage('promo');
	const [favoriteArray, setFavoriteArray] = useState(JSON.parse(localStorage.getItem('favoriteArray')) || []);

	function setRemoveToFavoriteArray(film) {
		const filmIsInArr = favoriteArray.some((item) => item.filmId === film.filmId);

		film.isLiked = !film.isLiked;
		if (!filmIsInArr) {
			setFavoriteArray((prevState) => {
				localStorage.setItem('favoriteArray', JSON.stringify([...prevState, film]));
				return [...prevState, film];
			});
		} else {
			setFavoriteArray((prevState) => {
				const removedArr = prevState.filter((item) => item.filmId !== film.filmId);
				localStorage.setItem('favoriteArray', JSON.stringify(removedArr));
				return removedArr;
			});
		}
	}

	//!TODO REMOVE
	useEffect(() => {
		console.log(favoriteArray, 'favoriteArra in useEf');
	}, [favoriteArray]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const popularResponse = await fetch(API_url_popular, {
					headers: {
						'Content-Type': 'application/json',
						'X-API-KEY': API_Key,
					},
				});
				const popularData = await popularResponse.json();

				const newsResponse = await fetch(API_NEWS, {
					headers: {
						'Content-Type': 'application/json',
						'X-API-KEY': API_Key,
					},
				});
				const newsData = await newsResponse.json();

				setMovieArr(popularData);

				setNewsData(newsData);

				setIsLoaded(true);
				setSliderArray(newsData?.items.slice(0, 5));

				const timerOne = setTimeout(() => {
					setTimerSlider(true);
				}, 3000);

				return () => clearTimeout(timerOne);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};

		if (localState === 'true') {
			fetchData();
		} else {
			const timer = setTimeout(() => {
				fetchData();
				setLocalState('true');
			}, 4000);
			return () => clearTimeout(timer);
		}
	}, [localState]);

	useEffect(() => {
		document.addEventListener('click', (e) => {
			if (!e.target.closest('.modal__card') && !e.target.closest('.movie')) {
				setModalOpen(false);
				document.body.style.overflow = 'auto';
			}
		});
	}, [modalOpen]);

	function searchMovie(value) {
		const apiSearcUrl = `${API_url_search}${value}`;

		fetch(value ? apiSearcUrl : API_url_popular, {
			headers: {
				'Content-Type': 'application.json',
				'X-API-KEY': API_Key,
			},
		})
			.then((response) => response.json())
			.then((data) => {
				setMovieArr(data);
			});
	}

	function showModal(e, filmInfo) {
		if (!e.target.closest('.like')) {
			fetch(API_Movie_details + filmInfo, {
				headers: {
					'Content-Type': 'application.json',
					'X-API-KEY': API_Key,
				},
			})
				.then((response) => response.json())
				.then((data) => {
					setMovieModalInfo(data);
					document.body.style.overflow = 'hidden';
					setModalOpen(true); // Закрываем модальное окно
				});
		} else return;
	}

	function closeModal() {
		setModalOpen(false); // Закрываем модальное окно
		document.body.style.overflow = 'auto';
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
				favoriteArray,
				newsData,
				setRemoveToFavoriteArray,
				// removeFromFavoriteArray,
				isHidedForm,
				setisHidedForm,
			}}>
			{children}
		</MovieContext.Provider>
	);
};
