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
          <button style={{padding: '15px 30px', fontSize: '28px', cursor: 'pointer', backgroundColor: 'white', border: 'black 1px solid', borderRadius: '5px'}}>
            Submit your project
          </button>
        </Link>
        <div style={{ marginTop: '30px', fontSize: '36px'}}>
          Projects:
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        Here we will have a list of user projects fetched from the database.
        <ProjectList/>
      </div>
    </div>
  );
}

export default ProjectsListPage;