import React from 'react';

const NewsFilterSource = props => {
  let sourceOptions = (
    <option disabled value={0}>
      {'------- Loading Sources ------'}
    </option>
  );

  if (props.sources.length !== 0) {
    sourceOptions = props.sources.map(source => {
      let { id, name } = source;
      return (
        <option key={id} value={id}>
          {name}
        </option>
      );
    });
  }

  return (
    <div className="form-inline mr-5">
      <label className="font-weight-bold" htmlFor="source">
        Source:
      </label>
      <select
        name="source"
        className="form-control ml-2"
        value={props.selectedSource}
        onChange={event => props.selectSource(event.target.value)}
      >
        {sourceOptions}
      </select>
    </div>
  );
};

export default NewsFilterSource;
