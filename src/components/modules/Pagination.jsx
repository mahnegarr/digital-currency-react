import React, { useState } from "react";
import style from "../modules/Pagination.module.css";

function Pagination({ page, setPage }) {
  const previousHandler = () => {
    setPage((page) => (page <= 1 ? 1 : page - 1));
  };

  const nextHandler = () => {
    setPage((page) => (page >= 10 ? 10 : page + 1));
  };
  return (
    <div className={style.paginationDiv}>
      <button
        onClick={previousHandler}
        className={page === 1 ? style.disabled : style.button}
      >
        previous
      </button>
      <p className={page === 1 ? style.selected : null}>1</p>
      <p className={page === 2 ? style.selected : null}>2</p>
      {page > 2 && page < 9 && (
        <>
          <span>...</span>
          <p className={style.selected}>{page}</p>
          <span></span>
        </>
      )}
      <span>...</span>
      <p className={page === 9 ? style.selected : null}>9</p>
      <p className={page === 10 ? style.selected : null}>10</p>
      <button
        onClick={nextHandler}
        className={page === 10 ? style.disabled : style.button}
      >
        next
      </button>
    </div>
  );
}

export default Pagination;
