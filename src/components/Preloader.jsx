import React, { useState, useEffect } from 'react';

function Preloader() {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	return (
		<div className={`preloader-wrapper`}>
			<div className={`preloader-text ${isMounted ? 'preloader-width-min' : ''}`}>KINOPOISK APP</div>
		</div>
	);
}

export default Preloader;
