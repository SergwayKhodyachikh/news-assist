import React from 'react';

const Button = ({ getGender, id, name }) => {
  return (
    <div className="col mr-1">
      <button
        onClick={() => getGender(id, name)}
        className="col btn btn-light border-dark"
      >
        Get Gender
      </button>
    </div>
  );
};

export default Button;
