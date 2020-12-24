import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions';
import UserForm from './UserForm';

class Signup extends Component {
  onSubmit = formValues => {
    this.props.signup(formValues);
  };
  render() {
    return <UserForm onSubmit={this.onSubmit} />;
  }
}

export default connect(
  null,
  {signup}
)(Signup);
