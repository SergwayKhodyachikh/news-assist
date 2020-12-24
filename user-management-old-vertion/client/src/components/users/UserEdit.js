import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Field, reduxForm } from 'redux-form';
import { fetchUser, editUser } from '../../actions';
import Input from '../layout/inputs/Input';
import PageLink from '../layout/buttons/PageLink';

class UserEdit extends Component {
  componentDidMount() {    
    this.props.fetchUser(this.props.match.params.id);
  }

  onSubmit = formValues => {
    this.props.editUser(this.props.match.params.id, formValues);
  };

  render() {
    return (
      <div>
        <form
          className="form"
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          autoComplete="off"
        >
          <h2>
            {this.props.initialValues
              ? this.props.initialValues.name
              : 'Profile'}
          </h2>
          <Field type="text" name="name" component={Input} label="Name" />
          <Field type="email" name="email" component={Input} label="Email" />
          <Field type="text" name="city" component={Input} label="City" />
          <h2>New Phone:</h2>
          <Field
            type="text"
            name="phoneType"
            component={Input}
            label="Phone Type"
          />
          <Field type="tel" name="number" component={Input} label="Number" />
          <div className="btn-panel">
            <input type="submit" value="Update" className="btn" />
            <PageLink
              address={`/users/${this.props.match.params.id}/delete`}
              content="Delete"
              cssClass="btn btn-delete"
            />
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const user = state.users.userList[ownProps.match.params.id];
  return {
    initialValues: user
      ? { ..._.pick(user, 'name', 'email'), city: user.address.city }
      : null
  };
};

const validate = formValues => {
  const error = {};
  if (!formValues.name) error.name = 'you must enter a name!';
  if (!formValues.city) error.city = 'you must enter a city!';
  if (!formValues.email) error.email = 'you must enter an email!';
  if (!/\S+@\S+\.\S+/.test(formValues.email)) error.email = 'invalid email!';
  if (formValues.number && isNaN(_.toNumber(formValues.number))) error.number = 'invalid number!';
  if(formValues.number && !formValues.phoneType ) error.phoneType = 'Invalid phone type!'  

  return error;
};

const formWarp = reduxForm({
  form: 'initializeFromState',
  validate
})(UserEdit);

export default connect(
  mapStateToProps,
  { fetchUser, editUser }
)(formWarp);
