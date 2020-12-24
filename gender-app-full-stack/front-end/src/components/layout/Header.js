import React from 'react';

const header = props => {
  const style = {
    textShadow: '3px 3px 7px rgba(0,0,0,0.7)'
  };
  return (
    <div className="header text-dark row mb-4">
      <div className="col justify-content-center">
        <h1 style={style} className="text-center display-4">Gender Recognition App</h1>
      </div>
    </div>
  );
};

export default header;
