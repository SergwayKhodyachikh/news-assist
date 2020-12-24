import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import Input from '../../layout/inputs/Input';
import TextAreaInput from '../../layout/inputs/TextAreaInput';
import PageLink from '../../layout/buttons/PageLink';
import { createPost } from '../../../actions';

const PostCreate = props => {
  const onSubmit = formValues => {
    props.createPost({ ...formValues, userId: props.match.params.id });
  };

  return (
    <div className="form-container">
      <form
        className="form"
        onSubmit={props.handleSubmit(onSubmit)}
        autoComplete="off"
      >
        <h2>Create Post</h2>
        <Field name="title" type="text" label="Title" component={Input} />
        <Field name="body" label="Body" component={TextAreaInput} />
        <div className="btn-panel">
          <input className="btn" type="submit" value="Create" />
          <PageLink address="/" content="Cancel" cssClass="btn btn-cancel" />
        </div>
      </form>
    </div>
  );
};

const validate = formValues => {
  const error = {};
  if (!formValues.title) error.title = 'You must enter a title!';
  if (!formValues.body) error.body = 'You must enter a body!';
  return error;
};

const formWarp = reduxForm({
  form: 'createTask',
  validate
})(PostCreate);

export default connect(
  null,
  { createPost }
)(formWarp);
