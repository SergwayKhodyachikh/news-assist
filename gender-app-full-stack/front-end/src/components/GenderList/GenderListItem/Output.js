import React from 'react';
import '../../../css/spinner.css';

const Output = ({ loading, getFailure, gender }) => {
  let output = null;

  if (!getFailure) output = loading ? <div className="lds-dual-ring" /> : gender;
  else output = '404';

  return (
    <div className="col p-2 ml-3 font-weight-bold text-success text-center">
      {output}
    </div>
  );
};

export default Output;
