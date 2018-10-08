import React from 'react';

const NewsResultPagination = props => {
  const pageItems = [];
  for (let i = 0; i < props.numberOfPages; i++) {
    const pageNumber = i + 1;
    if (i === props.currentPage) {
      pageItems.push(
        <li key={pageNumber} className="page-item active">
          <span className="page-link">{pageNumber}</span>
        </li>
      );
    } else {
      pageItems.push(
        <li
          key={pageNumber}
          className="page-item"
          onClick={() => props.changePage(i)}
        >
          <span className="page-link">{pageNumber}</span>
        </li>
      );
    }
  }

  let previousPage = null;
  let nextPage = null;

  if (props.currentPage === 0) {
    previousPage = (
      <li className="page-item disabled">
        <span className="page-link">
          <span>«</span>
          <span className="sr-only">Previous</span>
        </span>
      </li>
    );
  } else {
    previousPage = (
      <li
        className="page-item"
        onClick={() => props.changePage(props.currentPage - 1)}
      >
        <span className="page-link">
          <span>«</span>
          <span className="sr-only">Previous</span>
        </span>
      </li>
    );
  }

  if (props.currentPage === props.numberOfPages - 1) {
    nextPage = (
      <li className="page-item disabled">
        <span className="page-link">
          <span>»</span>
          <span className="sr-only">Next</span>
        </span>
      </li>
    );
  } else {
    nextPage = (
      <li
        className="page-item"
        onClick={() => props.changePage(props.currentPage + 1)}
      >
        <span className="page-link">
          <span>»</span>
          <span className="sr-only">Next</span>
        </span>
      </li>
    );
  }

  return (
    <div className="d-flex justify-content-center mt-5">
      <ul className="pagination">
        {previousPage}
        {pageItems}
        {nextPage}
      </ul>
    </div>
  );
};

export default NewsResultPagination;
