import React from 'react';
import TaskData from './TaskData';
import PageLink from '../../layout/buttons/PageLink';

const TaskList = ({ tasks, userId }) => {
  return (
    <React.Fragment>
      <div className="sub-list-header">
        <span className="property">Tasks:</span>
        <PageLink
          address={`/users/${userId}/tasks/new`}
          cssClass="btn btn-long-text"
          content="Create Task"
        />
      </div>
      <ul className="sub-list">
        {tasks
          ? Object.values(tasks).map(task => <TaskData key={task.id} task={task} />)
          : null}
      </ul>
    </React.Fragment>
  );
};

export default TaskList;
