import React from 'react';

const TabRoute = ({ path, currentPath, children }) => {
  if (currentPath === path) {
    return (
      <div className={`ui bottom attached tab segment active`}>
        {children}
      </div>
    );
  }

  return null;
};

export default TabRoute;