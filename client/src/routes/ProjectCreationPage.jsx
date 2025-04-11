import React from 'react'
import NavHeader from '../components/NavHeader'
import ProjectCreation from '../components/ProjectCreation'

const ProjectCreationPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavHeader/>
      <ProjectCreation/>
    </div>
  );
}

export default ProjectCreationPage