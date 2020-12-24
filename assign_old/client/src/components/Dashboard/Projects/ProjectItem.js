import React from 'react';
import { Link } from 'react-router-dom';
// import { GoKebabVertical } from 'react-icons/go';
import PropTypes from 'prop-types';
import ProjectMenu from './ProjectMenu';

const ProjectItem = ({ project }) => (
  <div className="max-w-sm rounded shadow-lg  h-32 flex my-10 mx-auto ">
    <Link className="flex-1" to={`/board/${project._id}`}>
      <div className="font-bold text-xl mb-2 pt-6 pl-4 truncate hover:text-blue-500">
        {project.title}
      </div>
    </Link>
    <ProjectMenu project={project} />
    {/* <div className="flex items-center">
      <GoKebabVertical className="text-3xl" />
    </div> */}
    {/* 
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{project.title}</div>
    </div>
    <div>
      <GoKebabVertical className="size" />
    </div> */}
  </div>
);

ProjectItem.propTypes = {
  project: PropTypes.object.isRequired
};

export default ProjectItem;
