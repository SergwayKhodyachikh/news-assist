import React from 'react';
import GenderListItem from './GenderListItem';

const GenderList = props => {
  const { genderListData } = props;
  const GenderList = genderListData.map(input => (
    <GenderListItem
      key={input.id}
      names={input.name}
      gender={input.gender}
      onChangeHandler={event => props.onChangeHandler(input.id, event)}
      getGenderHandler={() => props.getGenderHandler(input.id)}
    />
  ));

  return <div className="form-group">{GenderList}</div>;
};

export default GenderList;
