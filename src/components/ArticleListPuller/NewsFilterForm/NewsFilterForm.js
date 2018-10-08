import React from 'react';

import NewsFilterSource from './NewsFilterSource';
import NewsFilterSearch from './NewsFilterSearch';

const NewsFilterForm = props => {
  const {
    sources,
    selectedSource,
    selectSource,
    searchTerm,
    changeSearchTerm,
    searchArticle
  } = props;

  const onFormSubmit = event => {
    event.preventDefault();
    console.log(searchTerm);
    console.log(selectedSource);
    searchArticle(selectedSource, searchTerm);
  };

  return (
    <div className="d-flex justify-content-center mb-5">
      <form onSubmit={onFormSubmit} className="form-inline">
        <NewsFilterSource
          sources={sources}
          selectedSource={selectedSource}
          selectSource={selectSource}
        />
        <NewsFilterSearch
          searchTerm={searchTerm}
          changeSearchTerm={changeSearchTerm}
        />
        <button className="btn btn-outline-primary ml-2" type="submit">
          Apply
        </button>
      </form>
    </div>
  );
};

export default NewsFilterForm;
