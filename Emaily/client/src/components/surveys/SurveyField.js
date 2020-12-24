import React from 'react';

const SurveyField = ({ input, meta: { error, touched }, type, label }) => {
  return (
    <div>
      <label htmlFor={input.name}>{label}</label>
      <input
        {...input}
        type={type}
        id={input.name}
        style={{ marginBottom: '5px' }}
      />
      <div className="red-text" style={{ marginBottom: '20px' }}>
        {touched && error}
      </div>
    </div>
  );
};
 
export default SurveyField;