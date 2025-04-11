import React from 'react'
import NavHeader from '../components/NavHeader'
import { Link } from 'react-router-dom';
import ProjectList from '../components/ProjectList';

const ProjectsListPage = () => {
  return (
    <div>
      <NavHeader />
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <Link to="/create-project">
          <button style={{padding: '15px 30px', fontSize: '28px', cursor: 'pointer', backgroundColor: 'white', border: "1px solid #ddd", borderRadius: "8px",}}>
            Submit your project
          </button>
        </Link>
      </div>
      <ProjectList/>
    </div>
  );
}

export default ProjectsListPage;