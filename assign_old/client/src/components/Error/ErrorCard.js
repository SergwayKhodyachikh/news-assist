import React from 'react';
import PropTypes from 'prop-types';
import './ErrorCard.scss';

const ErrorCard = props => {
  return (
    <div className="card">
      <div className="browser">
        <div className="controls">
          <i></i>
          <i></i>
          <i></i>
        </div>

        <div className="eye"></div>
        <div className="eye"></div>
        <div className="mouth">
          <div className="lips"></div>
          <div className="lips"></div>
          <div className="lips"></div>
          <div className="lips"></div>
          <div className="lips"></div>
          <div className="lips"></div>
          <div className="lips"></div>
          <div className="lips"></div>
        </div>
      </div>

      <h1 className="heading">Unfortunately, something has gone wrong.</h1>
      <p className="text">
        We're unable to fulfill your request. Rest assured we have been notified
        and are looking into the issue. Please refresh your browser. If the
        error continues, please contact our{' '}
        <a className="link" href="http://mcause.us/supportticket">support team</a>.
      </p>
    </div>
  );
};

ErrorCard.propTypes = {};

export default ErrorCard;
