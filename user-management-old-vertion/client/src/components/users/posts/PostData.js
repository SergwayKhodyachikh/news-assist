import React from 'react';
import { Link } from 'react-router-dom';
import './PostData.css';

const Post = ({ post }) => {  
  const { body, title, userId, id } = post;
  return (
    <Link to={`/users/${userId}/posts/${id}/edit`} className="editable-content body-width-limit">
        <span className="property">Title:</span> {title} <br />
        <span className="property">Body:</span> {body}
    </Link>
  );
};

export default Post;
