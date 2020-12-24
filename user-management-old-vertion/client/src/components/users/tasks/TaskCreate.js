import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { createTask } from '../../../actions';
import Input from '../../layout/inputs/Input';

const TaskCreate = props => {
  const onSubmit = formValues => {
    props.createTask({ userId: props.match.params.id, ...formValues });
  };

  return (
    <div className="align-form">
      <form
        autoComplete="off"
        className="form"
        onSubmit={props.handleSubmit(onSubmit)}
      >
        <Field name="title" label="Title" component={Input} />
        <input className="btn" type="submit" value="Create" />
      </form>
    </div>
  );
};

const validate = formValues => {
  const error = {};
  if (!formValues.title) error.title = 'You must enter a title!';
  return error;
};

const formWarp = reduxForm({
  form: 'creatTask',
  validate
})(TaskCreate);

export default connect(
  null,
  {
    createTask
  }
)(formWarp);
