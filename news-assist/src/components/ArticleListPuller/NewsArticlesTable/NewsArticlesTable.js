import React from 'react';
import './Spinner.css';
import './errorPage.css';

import NewsResultPagination from './NewsResultPagination';

const NewsArticlesTable = props => {
  const articles = props.articles.map((article, articleNumber) => {
    let { author, description, source, title, url } = article;
    if (
      articleNumber >= props.currentPage * 5 &&
      articleNumber <= props.currentPage * 5 + 4
    ) {
      return (
        <tr
          className="row"
          key={articleNumber}
          onClick={() => window.open(url, '_blank')}
          style={{ cursor: 'pointer' }}
        >
          <td className="col-2" style={{ overflowWrap: 'break-word' }}>
            {author}
          </td>
          <td className="col-4">{title}</td>
          <td className="col-4">{description}</td>
          <td className="col-2">{source}</td>
        </tr>
      );
    } else {
      return null;
    }
  });
  let content = null;

  if (props.loading && !props.searchFailure) {
    content = (
      <div className="d-flex justify-content-center align-items-center">
        <div className="loader">Loading...</div>
      </div>
    );
  }

  if (!props.loading && !props.searchFailure) {
    content = (
      <React.Fragment>
        <table className="table table-hover mt-5">
          <thead className="bg-primary text-light container d-block">
            <tr className="row ">
              <th className="col-2">Author</th>
              <th className="col-4">Title</th>
              <th className="col-4">Description</th>
              <th className="col-2">Source</th>
            </tr>
          </thead>
          <tbody className="container d-block ">{articles}</tbody>
        </table>
        <NewsResultPagination
          currentPage={props.currentPage}
          numberOfPages={props.numberOfPages}
          changePage={props.changePage}
        />
      </React.Fragment>
    );
  }

  return (
    <div>
      {!props.loading && props.searchFailure ? (
        <div className="mt-5 pt-5">
          <div className="py-5 my-5">
            <div className="circles ">
              <p>
                404
                <br />
                <small>PAGE NOT FOUND</small>
              </p>
              <span className="circle big" />
              <span className="circle med" />
              <span className="circle small" />
            </div>
          </div>
        </div>
      ) : (
        <div className="shadow p-3 mb-5 bg-light rounded">{content}</div>
      )}
    </div>
  );
};

export default NewsArticlesTable;
