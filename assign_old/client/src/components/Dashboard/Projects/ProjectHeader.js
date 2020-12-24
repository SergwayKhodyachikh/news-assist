import React from 'react';
import ProjectCreate from './ProjectCreate';

const ProjectHeader = () => {
  return (
    <div className="border-b p-6 flex justify-between items-center">
      <h1 className="font-bold text-xl">Projects</h1>
      <div className="flex">
        <ProjectCreate />
      </div>
    </div>
  );
};
export default ProjectHeader;
