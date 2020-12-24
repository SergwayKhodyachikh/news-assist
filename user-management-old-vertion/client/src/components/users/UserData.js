import React from 'react';
import { Link } from 'react-router-dom';
import './UserData.css';
import PhoneList from './phones/PhoneList';
import TaskList from './tasks/TaskList';
import PostList from './posts/PostList';

const User = props => {
  const { user } = props;
  if (!user.address) return null;
  return (
    <li>
      <h2>{user.name}</h2>
      <Link to={`/users/${user.id}/edit`} className="editable-content">
        <span className="property">Name:</span> {user.name} <br />
        <span className="property">Email:</span> {user.email} <br />
        <span className="property">City:</span> {user.address.city} <br />
      </Link>
      <PhoneList phones={user.phones} />
      <TaskList tasks={user.tasks} userId={user.id}/>
      <PostList posts={user.posts} userId={user.id}/>
    </li>
  );
};

export default User;
