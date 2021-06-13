import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchStreams, deleteStream } from '../../actions/streams';

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderAdmin(stream) {
    if (this.props.isSignedIn && stream.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link to={`/streams/${stream.id}/edit`} className="ui primary button">Edit</Link>
          <Link to={`/streams/${stream.id}/delete`} className="ui negative button">Delete</Link>
        </div>
      );
    }
  }

  renderStreams() {
    return this.props.streams.map((stream) => {
      return (
        <div key={stream.id} className="item">
          {this.renderAdmin(stream)}
          <i className="middle aligned big video icon" />
          <div className="content">
            <Link to={`/streams/${stream.id}`} className="header">{stream.title}</Link>
            <div className="description">
              {stream.description}
            </div>
          </div>
        </div>
      );
    });
  }

  renderCreate() {
    if (this.props.isSignedIn) {
      return <Link to="/streams/create" className="ui right floated positive button">Create Stream</Link>;
    }
  }

  render() {
    return (
      <>
        <h2>Streams</h2>
        <div className="ui celled list">
          {this.props.streams.length > 0 && this.renderStreams()}
          {this.props.streams.length === 0 &&
            <div className="item">
              <div className="content">
                <div className="description">There are no streams currently listed.</div>
              </div>
            </div>
          }
        </div>
        {this.renderCreate()}
      </>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
    currentUserId: state.auth.user?.id || null,
    streams: Object.values(state.streams)
  };
};

export default connect(mapStateToProps, { fetchStreams, deleteStream })(StreamList);
