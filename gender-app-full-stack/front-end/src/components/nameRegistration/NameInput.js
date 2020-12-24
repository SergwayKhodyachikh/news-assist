import React from 'react';

const nameInput = ({registerName, registerNameChange}) => {
  
  const registerNameChangeHandler = event => {
    registerNameChange(event.target.value);
  };

  return (
    <div>
      <label htmlFor="name">Name:</label>
      <input
        className="form-control mb-4"
        type="text"
        id="name"
        placeholder="enter name"
        onChange={registerNameChangeHandler}
        value={registerName}
        required
      />
    </div>
  );
};

export default nameInput;
