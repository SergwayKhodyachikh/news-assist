import React from 'react';

const header = props => {
  return (
    <div className="header text-primary row mb-4">
      <div className="col justify-content-center">
        <h1 className="text-center display-4">Gender Recognition App</h1>
      </div>
      <div className="card-sm">
        <button
          onClick={props.addPersonHandler}
          className="btn btn-dark mr-3 mt-2"
        >
          Add Person
        </button>
        <button
          onClick={props.getAllGenders}
          className="btn btn-dark mr-4 mt-2"
        >
          Get all Genders
        </button>
      </div>
    </div>
  );
};

export default header;
