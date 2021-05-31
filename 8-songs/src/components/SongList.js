import './SongList.css';
import React from 'react';
import { connect } from 'react-redux';

import { selectSong } from '../actions';

const SongList = ({ songs, selectSong }) => {
  const renderedSongs = songs.map((song, i) => {
    return (
      <div key={i} className="item">
        <div className="content">
          <div className="header">
            {song.title}
          </div>
        </div>
        <div className="content">
          <button className="ui button" onClick={() => selectSong(song)}>Select</button>
        </div>
      </div>
    );
  });

  return (
    <div className="song-list ui divided list">
      {renderedSongs}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { songs: state.songs };
};

export default connect(mapStateToProps, { selectSong })(SongList);
