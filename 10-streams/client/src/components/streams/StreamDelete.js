import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import history from '../../history';
import { fetchStream, deleteStream } from '../../actions/streams';
import Modal from '../Modal';

const StreamDelete = ({ stream, fetchStream, deleteStream }) => {
  const { id } = useParams();

  useEffect(() => {
    fetchStream(id);
    // eslint-disable-next-line
  }, []);

  const deleteAction = () => {
    deleteStream(id);
    history.push('/');
  };

  return (
    <Modal
      size="tiny"
      title="Delete Stream"
      content={`Are you sure you want to delete "${stream?.title}"?`}
      actions={
        <>
          <button className="ui negative button" onClick={deleteAction}>Delete</button>
          <button className="ui button" onClick={history.goBack}>Cancel</button>
        </>
      }
      onDismiss={history.goBack}
    />
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);
