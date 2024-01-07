import React, { useState } from "react";
import styles from "../modules/Pagination.module.css";

function Pagination({ page, setPage }) {
  const previousHandler = () => {
    setPage((page) => (page == 1 ? 1 : page - 1));
  };
  const nextHandler = () => {
    setPage((page) => (page >= 10 ? 10 : page + 1));
  };
  return (
    <div className={styles.paginationDiv}>
      <button
        onClick={previousHandler}
        className={page === 1 ? styles.disabled : styles.button}
      >
        Previous
      </button>
      <p className={page ===1 ? styles.selected : null}>1</p>
      <p className={page ===2 ? styles.selected : null}>2</p>
      {page > 2 && page < 9 && (
        <>
          <span>...</span>
          <p className={styles.selected}>{page}</p>
        </>
      )}
      <span>...</span>
      <p className={page ===9 ? styles.selected : null}>9</p>
      <p className={page ===10 ? styles.selected : null}>10</p>
      <button onClick={nextHandler} className={page === 10 ? styles.disabled:styles.button}>
        Next
      </button>
    </div>
  );
}

export default Pagination;
