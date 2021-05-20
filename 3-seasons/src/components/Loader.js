import React from 'react';

const Loader = (props) => {
  return ( 
    <div className="ui active page dimmer">
      <div className="ui large text loader">{props.text}</div>
    </div>
  );
};

Loader.defaultProps = {
  text: 'Loading...'
};

export default Loader;
