import React from 'react';

const Input = ({ nameChange, name, id }) => {
  return (
    <div className="col-6 ml-3">
      <input
        className="form-control"
        type="text"
        name="name"
        placeholder="enter your name"
        value={name}
        onChange={event => nameChange(id, event.target.value)}
      />
    </div>
  );
};

export default Input;
