import React from 'react';
import Phone from './PhoneData';

const PhoneList = ({ phones }) => {
  return (
    <React.Fragment>
      <div className="property">Phones:</div>
      <div className="sub-list">
        {phones.map((phone, index) => (
          <Phone key={index} phone={phone} />
        ))}
      </div>
    </React.Fragment>
  );
};

export default PhoneList;
