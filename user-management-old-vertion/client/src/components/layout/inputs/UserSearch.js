import React from 'react';
import './UserSearch.css';

const UserSearch = ({ searchUser, searchValue }) => {
  return (
    <div className="users-panel ">
      <input
        autoComplete="off"
        type="search"
        id="search-value"
        placeholder="Search User By Name"
        onChange={e => searchUser(e.target.value)}
        value={searchValue}
      />
    </div>
  );
};

export default UserSearch;
