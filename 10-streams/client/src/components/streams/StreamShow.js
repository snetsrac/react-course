import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchStream } from '../../actions/streams';
import Loader from '../Loader';
import Player from '../Player';

const StreamShow = ({ stream, fetchStream }) => {
  const { id } = useParams();

  useEffect(() => {
    fetchStream(id);
    // eslint-disable-next-line
  }, []);

  if (!stream) return <Loader />;

  return (
    <>
      <Player url={`http://localhost:3002/live/${stream.id}.flv`} />
      <h1>{stream.title}</h1>
      <h5>{stream.description}</h5>
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);
