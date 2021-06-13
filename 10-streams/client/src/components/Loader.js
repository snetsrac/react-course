import React from 'react';

const Loader = ({ text }) => {
  return (
    <div className="ui active dimmer">
      <div className="ui text loader">{text || 'Loading...'}</div>
    </div>
  );
};

export default Loader;
