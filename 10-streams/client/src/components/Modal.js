import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ size, title, content, actions, onDismiss }) => {
  return ReactDOM.createPortal(
    <div className="ui dimmer modals visible active" onClick={onDismiss}>
      <div className={`ui ${size || 'standard'} modal visible active`} onClick={(e) => e.stopPropagation()}>
        <i className="close icon" onClick={onDismiss} />
        <div className="header">{title}</div>
        <div className="content">{content}</div>
        <div className="actions">{actions}</div>
      </div>
    </div>,
    document.getElementById('modal')
  );
};

export default Modal;
