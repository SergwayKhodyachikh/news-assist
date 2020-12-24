import React from 'react';

const GenderSelect = ({registerGender, registerGenderSelect}) => {
  const registerGenderSelectHandler = event => {
    registerGenderSelect(event.target.value);
  };
  return (
    <div>
      <label htmlFor="name">Gender:</label>
      <select
        className="custom-select"
        id="name"
        required
        onChange={registerGenderSelectHandler}
        value={registerGender}
      >
        <option value="">select gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </div>
  );
};

export default GenderSelect;
