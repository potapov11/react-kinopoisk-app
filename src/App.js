import React, { useContext } from 'react';
import Header from './components/Header/Header';
import Preloader from './components/Preloader';
import { MovieContext } from './components/context';
import Home from './pages/Home/Home.jsx';
import './App.css';

function App() {
	const { isLoaded } = useContext(MovieContext);

	return (
		<div className="App">
			<div className="container">
				{isLoaded ? (
					<>
						<div className="content">
							<Header />
							<Home />
						</div>
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
