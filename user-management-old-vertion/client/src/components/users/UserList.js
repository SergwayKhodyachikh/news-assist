import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers, searchUser } from '../../actions/index';
import PageLink from '../layout/buttons/PageLink';
import UserData from './UserData';
import UserSearch from '../layout/inputs/UserSearch';
import './UserList.css';

class Users extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUserList = () => {
    let users;
    if (this.props.searchValue)
      users = this.props.users.filter(user =>
        user.name
          .toLowerCase()
          .includes(this.props.searchValue.toLowerCase(), 0)
      );
    else users = this.props.users;
    return users.map(user => (
      <UserData className="item" user={user} key={user.id} />
    ));
  };

  render() {
    return (
      <div>
        <UserSearch
          searchUser={this.props.searchUser}
          searchValue={this.props.searchValue}
        />
        <PageLink
          address="/users/new"
          content="+"
          cssClass="btn btn-create-user"
        />
        <ul className="item-list item-list-user">{this.renderUserList()}</ul>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  users: Object.values(state.users.userList),
  searchValue: state.users.searchValue
});

export default connect(
  mapStateToProps,
  { fetchUsers, searchUser }
)(Users);
