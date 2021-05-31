import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
  if (!song) return null;

  return (
    <React.Fragment>
      <h4>Details For:</h4>
      <div style={{ paddingLeft: '2rem' }}>
        <div><b>Title:</b> {song.title}</div>
        <div><b>Duration:</b> {song.duration}</div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
