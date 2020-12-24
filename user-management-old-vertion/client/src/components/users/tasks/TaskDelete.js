import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from '../../Modal';
import history from '../../../history';
import { fetchTask, deleteTask } from '../../../actions';
import PageLink from '../../layout/buttons/PageLink';

export class TaskDelete extends Component {
  componentDidMount() {
    this.props.fetchTask(this.props.match.params.taskId);
  }

  renderContent() {
    if (!this.props.task) return 'Are you sure you want to delete this task ?';
    return (
      <span>
        Are you sure you want to delete the task with the title: <br />{' '}
        {this.props.task.title}
      </span>
    );
  }

  renderOptions() {
    return (
      <div className="btn-panel">
        <button
          className="btn btn-delete m-5"
          onClick={() => this.props.deleteTask(this.props.match.params)}
        >
          Delete
        </button>
        <PageLink
          content="Cancel"
          cssClass="btn btn-cancel"
          address={`/users/${this.props.match.params.id}/tasks/${
            this.props.match.params.taskId
          }/edit`}
        />
      </div>
    );
  }
  render() {
    if (!this.props.task) return null;
    return (
      <div>
        <Modal
          onDismiss={() =>
            history.push(
              `/users/${this.props.match.params.id}/tasks/${
                this.props.match.params.taskId
              }/edit`
            )
          }
          header="Delete Task"
          content={this.renderContent()}
          options={this.renderOptions()}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { id, taskId } = ownProps.match.params;
  const task = state.users.userList[id]
    ? state.users.userList[id].tasks[taskId]
    : null;
  return {
    task
  };
};

export default connect(
  mapStateToProps,
  { fetchTask, deleteTask }
)(TaskDelete);
