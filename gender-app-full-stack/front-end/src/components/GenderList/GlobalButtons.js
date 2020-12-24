import React from 'react';

const GlobalButtons = ({ addPerson, genderListData, getGender }) => {
  const getAllGenders = () =>
    genderListData.forEach(item => getGender(item.id, item.name))

  return (
    <div className="align-self-end mt-4 mr-1">
      <button onClick={addPerson} className="btn btn-dark mr-3">
        Add Person
      </button>
      <button onClick={getAllGenders} className="btn btn-dark">
        Get all Genders
      </button>
    </div>
  );
};

export default GlobalButtons;
