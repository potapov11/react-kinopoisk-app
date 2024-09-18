import React, { useEffect, useState } from "react";
import { Pagination } from "@mui/material";
import { MovieContext } from "../../contecsts/context";
import useFetch from "../../hooks/useFetch";
import "./pagination.css"; // Импортируем CSS

function PaginationBlock() {
  const { movieArrInfo, setMovieArr } = React.useContext(MovieContext);
  const [currentPage, setCurrentPage] = useState(1);
  const API_url_popular_page = `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=${currentPage}`;
  const [data, error] = useFetch(API_url_popular_page);

  useEffect(() => {
    if (data) {
      const { films } = data;
      setMovieArr(films);
    }
  }, [data, setMovieArr]);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <>
      {error && <div>Error: {error.message}</div>}
      <Pagination count={movieArrInfo.pagesCount} onChange={handlePageChange} variant="outlined" shape="rounded" className="background-lite" />
    </>
  );
}

export default PaginationBlock;
