import React from 'react';
import { Link } from 'react-router-dom';

import GoogleAuth from './GoogleAuth';

const Header = () => {
  return (
    <div className="ui fixed inverted menu">
      <div className="ui container">
        <Link to="/" className="header borderless item">
          <i className="big play circle outline icon" />
          Streamr
        </Link>
        <div className="right menu">
          <Link to="/" className="item">All Streams</Link>
          <GoogleAuth />
        </div>
      </div>
    </div>
  );
};

export default Header;
