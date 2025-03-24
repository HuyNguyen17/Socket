import React from 'react'
import NavHeader from '../components/NavHeader'
import { useLocation } from 'react-router-dom'

const ProjectResultPage = () => {
  const {state} = useLocation();
  const SUCCESS_MESSAGE = "Project creation successful. Check it out on the projects page!";
  const FAILURE_MESSAGE = "Project creation failure.";
  return (
    <div>
      <NavHeader/>
      <div style={{textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
        <p style={{fontSize: '24px', marginTop: '20px'}}>
          {state?.success ? SUCCESS_MESSAGE : FAILURE_MESSAGE}
        </p>
      </div>
    </div>
  );
}

export default ProjectResultPage;