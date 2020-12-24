import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from '../Modal';
import { fetchUser, deleteUser } from '../../actions';
import history from '../../history';
import PageLink from '../layout/buttons/PageLink';

class UserDelete extends Component {
  componentDidMount() {
    this.props.fetchUser(this.props.match.params.id);
  }

  renderContent() {
    if (!this.props.user) return 'Are you sure you want to delete this user?';
    return (
      <span>
        Are you sure you want to delete the user with the name: <br />{' '}
        {this.props.user.name}
      </span>
    );
  }

  renderOptions() {
    return (
      <div className="btn-panel">
        <button
          className="btn btn-delete m-5"
          onClick={() => this.props.deleteUser(this.props.match.params.id)}
        >
          Delete
        </button>
        <PageLink
          content="Cancel"
          cssClass="btn btn-cancel"
          address={`/users/${this.props.match.params.id}/edit`}
        />
      </div>
    );
  }

  render() {
    return (
      <div>
        <Modal
          header="Delete User"
          content={this.renderContent()}
          options={this.renderOptions()}
          onDismiss={() =>
            history.push(`/users/${this.props.match.params.id}/edit`)
          }
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users.userList[ownProps.match.params.id]
  };
};

export default connect(
  mapStateToProps,
  { fetchUser, deleteUser }
)(UserDelete);
