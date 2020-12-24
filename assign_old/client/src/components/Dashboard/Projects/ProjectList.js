import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchProjects } from '../../../actions/';
import ProjectItem from './ProjectItem';

const ProjectList = ({ fetchProjects, projects }) => {
  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  const renderProjects = () =>
    projects.map(project => (
      <ProjectItem key={project._id} project={project} />
    ));

  return <div className="overflow-y-auto flex-1">{renderProjects()}</div>;
};

const mapStateToProps = ({ projects }) => ({
  projects: Object.values(projects)
});

export default connect(
  mapStateToProps,
  { fetchProjects }
)(ProjectList);
