import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  getUsersRequest,
  createUserRequest,
  deleteUserRequest,
  usersError,
} from '../actions/users';
import PropTypes from 'prop-types';
import UserList from './UserList';
import NewUserForm from './NewUserForm';
import { Alert } from 'reactstrap';

function App({ getUsersRequest, createUserRequest, deleteUserRequest, usersError, users }) {
  useEffect(() => {
    getUsersRequest();
    return () => {};
  }, [getUsersRequest]);

  return (
    <div style={{ margin: '0 auto', padding: '20px', maxWidth: '600px' }} className="App">
      <Alert color="danger" isOpen={!!users.error} toggle={() => usersError('')}>
        {users.error}
      </Alert>
      <NewUserForm onSubmit={createUserRequest} />
      <UserList onDeleteUser={deleteUserRequest} users={users.items} />
    </div>
  );
}

App.prototype = {
  getUsersRequest: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
  createUserRequest: PropTypes.func.isRequired,
  deleteUserRequest: PropTypes.func.isRequired,
  usersError: PropTypes.func.isRequired,
};

export default connect(({ users }) => ({ users }), {
  getUsersRequest,
  createUserRequest,
  deleteUserRequest,
  usersError,
})(App);
