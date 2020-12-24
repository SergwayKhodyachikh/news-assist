import React from 'react';

const SelectInput = ({input, meta, label}) => {
  return (
    <div className="field">
      <label className="property" htmlFor={input.name}>{`${label}: `}</label>

      <select className="input" id={input.name} {...input} style={{ padding: '0', height: '4vh' }}>
        <option value={true}>Completed</option>
        <option value={false}>In Progress</option>
      </select>

      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}

    </div>
  );
};

export default SelectInput;
