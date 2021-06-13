import React from 'react';
import { connect } from 'react-redux';

import { initAuth, trySignIn, trySignOut } from '../actions/auth';

class GoogleAuth extends React.Component {
  componentDidMount() {
    this.props.initAuth();
  }

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
      <button className="ui blue google button" onClick={this.props.trySignOut}>
        <i className="google icon" />
        Sign Out
      </button>
      );
    } else {
      return (
        <button className="ui blue google button" onClick={this.props.trySignIn}>
          <i className="google icon" />
          Sign in with Google
        </button>
      );
    }
  }

  render() {
    return <div className="item">{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, {
  initAuth,
  trySignIn,
  trySignOut
})(GoogleAuth);