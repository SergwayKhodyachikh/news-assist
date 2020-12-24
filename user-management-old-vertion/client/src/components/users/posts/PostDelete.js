import React, { Component } from 'react';
import Modal from '../../Modal';
import history from '../../../history';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../../../actions';
import PageLink from '../../layout/buttons/PageLink';

export class PostDelete extends Component {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.PostId);
  }

  renderContent() {
    if (!this.props.post) return 'Are you sure you want to delete this post ?';
    return (
      <span>
        Are you sure you want to delete the post with the title: <br />{' '}
        {this.props.post.title}
      </span>
    );
  }

  renderOptions() {
    return (
      <div className="btn-panel">
        <button
          className="btn btn-delete m-5"
          onClick={() => this.props.deletePost(this.props.match.params)}
        >
          Delete
        </button>
        <PageLink
          address={`/users/${this.props.match.params.id}/posts/${
            this.props.match.params.postId
          }/edit`}
          content="Cancel"
          cssClass="btn btn-cancel"
        />
      </div>
    );
  }
  render() {
    if (!this.props.post) return null;
    return (
      <div>
        <Modal
          onDismiss={() =>
            history.push(
              `/users/${this.props.match.params.id}/posts/${
                this.props.match.params.postId
              }/edit`
            )
          }
          header="Delete Post"
          content={this.renderContent()}
          options={this.renderOptions()}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { id, postId } = ownProps.match.params;
  const post = state.users.userList[id]
    ? state.users.userList[id].posts[postId]
    : null;
  return {
    post
  };
};

export default connect(
  mapStateToProps,
  { fetchPost, deletePost }
)(PostDelete);
