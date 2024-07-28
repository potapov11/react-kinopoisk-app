import React from 'react';
import './index.css';
import App from './App';
import Home from './pages/Home/Home';
import FavoritePage from './pages/FavoritePage/FavoritePage';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { MovieDataContext } from './components/context';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: 'FavoritePage', // Изменено на 'favorite'
				element: <FavoritePage />,
			},
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<MovieDataContext>
			<RouterProvider router={router} />
		</MovieDataContext>
	</React.StrictMode>,
);
