import React from 'react';

const TextAreaInput = ({ input, meta, label }) => {
  return (
    <div className="field">
      <label className="property" htmlFor={input.name}>{`${label}: `}</label>{' '}
      <textarea
        id={input.name}
        className="input"
        style={{ resize: 'none', height: '25vh' }}
        {...input}
      />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default TextAreaInput;
