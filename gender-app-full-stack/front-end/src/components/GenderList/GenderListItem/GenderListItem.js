import React from 'react';
import Input from './Input';
import Button from './Button';
import Output from './Output';

const GenderListItem = ({ nameChange, id, name, gender, getGender, loading, getFailure }) => {
  return (
    <div className="row mb-3">
      <Input nameChange={nameChange} id={id} name={name} />
      <Output gender={gender} loading={loading} getFailure={getFailure} />
      <Button getGender={getGender} id={id} name={name} />
    </div>
  );
};

export default GenderListItem;
