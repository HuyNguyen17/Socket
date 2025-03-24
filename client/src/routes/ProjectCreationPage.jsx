import React from 'react'
import NavHeader from '../components/NavHeader'
import ProjectCreation from '../components/ProjectCreation'

const ProjectCreationPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavHeader/>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
        <h2 className="text-2xl font-semibold mb-4">Submit a project to The Socket</h2>
        <ProjectCreation/>
      </div>
    </div>
  );
}

export default ProjectCreationPage