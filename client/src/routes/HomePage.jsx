import React from 'react'
import HomePageHeader from '../components/HomePageHeader'
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate(); // Hook to handle navigation

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', textAlign: 'center'}}>
      <HomePageHeader />
      <p style={{ fontSize: '14px', color: '#555', marginTop: '10px' }}>
        The center of the Maker community at UF ECE.
      </p>
      <button onClick={() => navigate('/login')} style={{marginTop: '20px', padding: '10px 20px', fontSize: '16px', backgroundColor: '#007BFF', color: 'white', border: 'none', borderRadius: '5px'}}>
        Login
      </button>
      <button onClick={() => navigate('/signup')} style={{marginTop: '20px', padding: '10px 20px', fontSize: '16px', backgroundColor: '#007BFF', color: 'white', border: 'none', borderRadius: '5px'}}>
        Sign Up
      </button>
    </div>
  );
}

export default HomePage;


