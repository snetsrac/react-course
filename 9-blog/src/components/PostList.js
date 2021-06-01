import React from 'react';
import { connect } from 'react-redux';

import UserHeader from './UserHeader';
import { fetchPostsAndUsers } from '../actions';

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPostsAndUsers();
  }
  
  renderPosts = () => {
    return this.props.posts.map((post) => {
      return (
        <div key={post.id} className="item">
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <UserHeader id={post.userId} />
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="ui relaxed divided list">
        {this.renderPosts()}
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);
