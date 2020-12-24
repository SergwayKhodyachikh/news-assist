import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ onDismiss, className, children }) => {
  return ReactDOM.createPortal(
    <div
      style={{ backgroundColor: 'rgba(9, 30, 66, 0.54)' }}
      className="absolute top-0 h-screen w-screen z-10 flex items-start justify-center"
      onClick={onDismiss}
    >
      <div className={className} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal;
