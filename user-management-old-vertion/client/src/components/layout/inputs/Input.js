import React from 'react';

const Input = ({ type, label, meta, input }) => {
  return (
    <div className="field">
      <label className="property" htmlFor={type}>{`${label}: `}</label>{' '}
      <input className="input" {...input} type={type} id={type} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default Input;
