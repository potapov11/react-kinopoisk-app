import React, { useState, useEffect } from 'react';

const useLocalStorage = (key, initialValue) => {
	console.log(key, 'key');
	console.log(initialValue, 'initialValue');
	const [localState, setLocalState] = useState(() => {
		const localData = localStorage.getItem(key);
		return localData || initialValue;
	});

	useEffect(() => {
		localStorage.setItem(key, localState);
	}, [localState]);
	return [localState, setLocalState];
};

export default useLocalStorage;
