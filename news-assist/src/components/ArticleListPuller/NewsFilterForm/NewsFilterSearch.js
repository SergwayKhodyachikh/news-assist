import React from 'react';

const NewsFilterSearch = props => {
  const { changeSearchTerm, searchTerm } = props;
  return (
    <div>
      <div className="form-inline">
        <label className="font-weight-bold" htmlFor="search">
          Search:
        </label>
        <input
          className="form-control ml-2"
          name="search"
          type="text"
          onChange={event => changeSearchTerm(event.target.value)}
          value={searchTerm}
        />
      </div>
    </div>
  );
};

export default NewsFilterSearch;
