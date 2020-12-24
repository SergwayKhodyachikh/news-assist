import React from 'react';

const GenderListItem = props => {
  return (
    <div className="row mb-3">
      <div className="col-6 ml-3">
        <input
          className="form-control"
          type="text"
          name="name"
          placeholder="enter your name"
          value={props.name}
          onChange={props.onChangeHandler}
        />
      </div>
      <div className="col p-2 ml-3 font-weight-bold text-success">
        {props.gender}
      </div>
      <div className="col">
        <button
          onClick={props.getGenderHandler}
          className="col btn btn-light border-dark"
        >
          Get Gender
        </button>
      </div>
    </div>
  );
};

export default GenderListItem;
