function Pagination(props) {
  const { movieArr } = props;
  const { getPageMovie } = props;

  console.log(movieArr.pagesCount);
  console.log(typeof movieArr.pagesCount);

  let paginationArr = [];

  for (let i = 1; i <= movieArr.pagesCount; i++) {
    paginationArr.push(
      <li onClick={() => getPageMovie(i)} className="pagination__item">
        {i}
      </li>
    );
  }

  return paginationArr.length > 10 ? (
    <div className="pagination">
      <div className="pagination__nav"></div>
      <div className="pagination__nav">Назад</div>
      <ul className="pagination__list">
        {
          (paginationArr = paginationArr
            .slice(0, 5)
            .concat([<div>.....</div>])
            .concat(paginationArr[paginationArr.length - 1]))
        }
      </ul>
      <div className="pagination__nav">Вперед</div>
    </div>
  ) : (
    <div className="pagination">
      <div className="pagination__nav">Вперед</div>
      <ul className="pagination__list">{paginationArr}</ul>
      <div className="pagination__nav">Назад</div>
    </div>
  );
}

export default Pagination;
