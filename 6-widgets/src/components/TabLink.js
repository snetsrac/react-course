import React from 'react';

const TabLink = ({ path, name, onPathChange }) => {
  const onLinkClick = (event) => {
    event.preventDefault();
    window.history.pushState({}, '', path);
    onPathChange(path);
  };

  const active = () => {
    return window.location.pathname === path;
  };

  return <a href={path} className={`item${active() ? ' active' : ''}`} onClick={onLinkClick}>{name}</a>;
};

export default TabLink;
