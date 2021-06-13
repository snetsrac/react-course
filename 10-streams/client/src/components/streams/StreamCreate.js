import React from 'react';
import { connect } from 'react-redux';

import { createStream } from '../../actions/streams';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {
  onSubmit = (values) => {
    this.props.createStream(values);
  };

  render() {
    return (
      <>
        <h2>Create a New Stream</h2>
        <StreamForm onSubmit={this.onSubmit} />
      </>
    );
  }
};

export default connect(null, { createStream })(StreamCreate);
