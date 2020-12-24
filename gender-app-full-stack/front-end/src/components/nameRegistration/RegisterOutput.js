import React from 'react';
import './../../css/spinner.css';

const RegisterOutput = ({ getFailure, loading, res }) => {
  let output = null;
  
  if (res.length) {
    if (!getFailure)
      output = loading ? (
        <div className="lds-dual-ring" />
      ) : (
        <div className="text-center pt-5 text-success ">
          <h4>Succses</h4>
        </div>
      );
    else
      output = (
        <div className="text-center pt-5">
          404
        </div>
      );
  }

  return <div>{output}</div>;
};

export default RegisterOutput;
