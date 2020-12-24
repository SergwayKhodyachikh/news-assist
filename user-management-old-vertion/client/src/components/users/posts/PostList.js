import React from 'react';
import PageLink from '../../layout/buttons/PageLink';
import Post from './PostData';

const PostList = ({ posts, userId }) => {
  if (!posts) return null;
  let postsList = [];
  if (posts)
    postsList = Object.values(posts).map(post => (
      <Post post={post} key={post.id} />
    ));
  return (
    <React.Fragment>
      <div className="sub-list-header">
        <span className="property">Posts:</span>
        <PageLink
          address={`/users/${userId}/posts/new`}
          cssClass="btn btn-long-text"
          content="Create Post"
        />
      </div>
      <ul className="sub-list">{postsList}</ul>
    </React.Fragment>
  );
};

export default PostList;
