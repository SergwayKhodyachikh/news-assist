import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { fetchTask, editTask } from '../../../actions';
import Input from '../../layout/inputs/Input';
import SelectInput from '../../layout/inputs/SelectInput';
import PageLink from '../../layout/buttons/PageLink';

class TaskEdit extends Component {
  componentDidMount() {
    this.props.fetchTask(this.props.match.params.taskId);
  }
  onSubmit = formValues => {
    const { id, title, completed } = formValues;
    this.props.editTask(id, { title, completed });
  };

  render() {
    return (
      <div className="align-form">
        <form
          autoComplete="off"
          className="form"
          onSubmit={this.props.handleSubmit(this.onSubmit)}
        >
          <Field name="title" label="Title" component={Input} />
          <Field name="completed" label="Completed" component={SelectInput} />
          <div className="btn-panel">
            <input type="submit" value="Update" className="btn" />
            <PageLink
              address={`/users/${this.props.match.params.id}/tasks/${
                this.props.match.params.taskId
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
  const { id, taskId } = ownProps.match.params;
  const user = state.users.userList[id];
  const initialValues = user ? user.tasks[taskId] : null;
  return {
    initialValues
  };
};
const validate = formValues => {
  const error = {};
  if (!formValues.title) error.title = 'You must enter a title!';
  return error;
};

const formWarp = reduxForm({
  form: 'editTask',
  validate
})(TaskEdit);

export default connect(
  mapStateToProps,
  { fetchTask, editTask }
)(formWarp);
