import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';

const App = () => {
  return (
    <div className="ui grid container" style={{ marginTop: '1rem' }}>
      <div className="eight wide column">
        <SongList />
      </div>
      <div className="eight wide column">
        <SongDetail />
      </div>
    </div>
  );
};

export default App;
