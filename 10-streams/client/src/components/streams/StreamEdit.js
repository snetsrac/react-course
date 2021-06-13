import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { fetchStream, editStream } from '../../actions/streams';
import StreamForm from './StreamForm';
import Loader from '../Loader';

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = (values) => {
    this.props.editStream(this.props.match.params.id, values);
  };

  render() {
    const { isSignedIn, currentUserId, stream } = this.props;

    if (!isSignedIn || currentUserId !== stream.userId) {
      return <Redirect to="/" />;
    }

    if (!stream) return <Loader />;

    return (
      <>
        <h2>Edit Stream</h2>
        <StreamForm onSubmit={this.onSubmit} initialValues={stream} />
      </>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    isSignedIn: state.auth.isSignedIn,
    currentUserId: state.auth.user?.id || null,
    stream: state.streams[ownProps.match.params.id]
  };
}

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);
