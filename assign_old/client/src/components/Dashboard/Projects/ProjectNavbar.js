import React from 'react';
import { NavLink } from 'react-router-dom';

const ProjectNavbar = () => {
  return (
    <div className="flex justify-between">
      <NavLink
        activeClassName="text-blue-500 border-b-2 border-blue-500"
        exact
        to="/dashboard/projects"
        className="w-1/4 p-3 font-bold text-center"
      >
        All
      </NavLink>
      <NavLink
        activeClassName="text-blue-500 border-b-2 border-blue-500"
        exact
        to="/dashboard/projects/collections"
        className="w-1/4 p-3 font-bold text-center"
      >
        Collections{' '}
      </NavLink>
      <NavLink
        activeClassName="text-blue-500 border-b-2 border-blue-500"
        exact
        to="/dashboard/projects/favorite"
        className="w-1/4 p-3 font-bold text-center"
      >
        Favorite{' '}
      </NavLink>

      <NavLink
        activeClassName="text-blue-500 border-b-2 border-blue-500"
        exact
        to="/dashboard/projects/archived"
        className="w-1/4 p-3 font-bold text-center"
      >
        Archived
      </NavLink>
    </div>
  );
};

export default ProjectNavbar;
