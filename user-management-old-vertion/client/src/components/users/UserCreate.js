import React from 'react';
import { connect } from 'react-redux';
import { createUser } from '../../actions';
import { Field, reduxForm } from 'redux-form';
import PageLink from '../layout/buttons/PageLink';
import Input from '../layout/inputs/Input';

const UserCreate= (props) => {
  const onSubmit = formValues => props.createUser(formValues);
  ;
  
    return (
      <React.Fragment>
        <form
          className="form"
          onSubmit={props.handleSubmit(onSubmit)}
          autoComplete="off"
        >
          <h2>Create User</h2>
          <Field name="name" type="text" label="Name" component={Input} />
          <Field name="email" type="email" label="Email" component={Input} />
          <Field name="city" type="text" label="City" component={Input} />
          <div className="btn-panel">
            <input className="btn" type="submit" value="Create" />
            <PageLink content="Cancel" address="/" cssClass="btn btn-cancel" />
          </div>
        </form>
      </React.Fragment>
    );
}

const validate = formValues => {
  const error = {};
  if (!formValues.name) error.name = 'you must enter a name!';
  if (!formValues.city) error.city = 'you must enter a city!';
  if (!formValues.email) error.email = 'you must enter an email!';
  else if (!/\S+@\S+\.\S+/.test(formValues.email))
    error.email = 'invalid email!';
  return error;
};

const formWarp = reduxForm({
  form: 'userCreate',
  validate
})(UserCreate);

export default connect(
  null,
  { createUser }
)(formWarp);
