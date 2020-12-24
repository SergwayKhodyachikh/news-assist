import React from 'react';
import { Link } from 'react-router-dom';
import './TaskData.css';

const TaskData = ({ task }) => {
	const { completed, title } = task;

	return (
		<Link to={`/users/${task.userId}/tasks/${task.id}/edit`} className="editable-content">
				<span className="property">Title:</span> {title} <br />
				<span className="property">Status: </span>
				{completed ? <span className="success">Completed</span> : <span className="fail">In Progress</span>}
		</Link>
	);
};

export default TaskData;
