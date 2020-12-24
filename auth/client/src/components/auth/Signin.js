import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signin } from '../../actions';
import UserForm from './UserForm';

class Signin extends Component {
  onSubmit = formValues => {
    this.props.signin(formValues);
  };
  render() {
    return (
      <UserForm onSubmit={this.onSubmit}/>
    );
  }
}
const mapStateToProps = state => ({
  errorMessage: state.auth.errorMessage
});

export default connect(
  mapStateToProps,
  {signin}
)(Signin);
