import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import Input from '../../layout/inputs/Input';
import TextAreaInput from '../../layout/inputs/TextAreaInput';
import PageLink from '../../layout/buttons/PageLink';
import { fetchPost, editPost } from '../../../actions';

class PostEdit extends Component {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.postId);
  }

  onSubmit = formValues => {
    const { id, userId, title, body } = formValues;
    this.props.editPost(id, { userId, title, body });
  };

  render() {
    return (
      <div className="form-container">
        <form
          autoComplete="off"
          className="form"
          onSubmit={this.props.handleSubmit(this.onSubmit)}
        >
          <h2>Create Post</h2>
          <Field name="title" type="text" label="Title" component={Input} />
          <Field name="body" label="Body" component={TextAreaInput} />
          <div className="btn-panel">
            <input type="submit" value="Update" className="btn" />
            <PageLink
              address={`/users/${this.props.match.params.id}/posts/${
                this.props.match.params.postId
              }/delete`}
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
  const { id, postId } = ownProps.match.params;
  const user = state.users.userList[id];
  const initialValues = user ? user.posts[postId] : null;
  return {
    initialValues
  };
};

const validate = formValues => {
  const error = {};
  if (!formValues.title) error.title = 'You must enter a title!';
  if (!formValues.body) error.body = 'You must enter a body!';
  return error;
};

const formWarp = reduxForm({
  form: 'editPost',
  validate
})(PostEdit);

export default connect(
  mapStateToProps,
  { fetchPost, editPost }
)(formWarp);
