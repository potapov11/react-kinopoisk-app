import React, { useState, useEffect } from 'react';

function Pagination(props) {
	const { movieArr, getPageMovie } = props;
	const pageCount = props.movieArr.pagesCount;

	const [paginationArray, setPaginationArray] = useState([]);
	const [currentPageCount, setCurrentPageCount] = useState(1);
	// const [styleLastItem, setStyleLastItem] = useState(false);

	function setNewStyle(index) {
		setCurrentPageCount(index);
		// alert(num);
	}

	useEffect(() => {
		let newPaginationArray = [];
		for (let i = 1; i <= pageCount; i++) {
			newPaginationArray.push(
				<li
					className="pagination__item"
					onClick={() => {
						setNewStyle(i);
						getPageMovie(i);
					}}>
					{i}
				</li>,
			);
		}

		newPaginationArray[currentPageCount - 1] = <li className="pagination__item checked-item">{currentPageCount}</li>;

		setPaginationArray(newPaginationArray);
	}, [pageCount, currentPageCount]);

	return (
		<ul className="pagination__list">
			<div className="pagination__nav">Назад</div>
			{paginationArray}
			<div className="pagination__nav">Вперед</div>
		</ul>
	);
}

export default Pagination;
