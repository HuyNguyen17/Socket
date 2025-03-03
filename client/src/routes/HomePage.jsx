import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', textAlign: 'center'}}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', maxWidth: '1200px'}}>
        <h1 className="font-weight-light display-1" style={{ marginRight: '20px' }}>The Socket</h1>
        <div style={{display: 'flex' }}>
          <button
            onClick={() => navigate('/login')}
            style={{
              padding: '10px 20px', fontSize: '16px', backgroundColor: 'transparent', color: 'black', border: 'none',
              borderBottom: '2px solid transparent', cursor: 'pointer', marginLeft: '10px', transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.borderBottom = '2px solid black'}
            onMouseLeave={(e) => e.target.style.borderBottom = '2px solid transparent'}
          >
            Login/Register
          </button>
          <button
            onClick={() => navigate('/users')}
            style={{
              padding: '10px 20px', fontSize: '16px', backgroundColor: 'transparent', color: 'black', border: 'none',
              borderBottom: '2px solid transparent', cursor: 'pointer', marginLeft: '10px', transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.borderBottom = '2px solid black'}
            onMouseLeave={(e) => e.target.style.borderBottom = '2px solid transparent'}
          >
            User List
          </button>
          <button
            onClick={() => navigate('/projects')}
            style={{
              padding: '10px 20px', fontSize: '16px', backgroundColor: 'transparent', color: 'black', border: 'none',
              borderBottom: '2px solid transparent', cursor: 'pointer', marginLeft: '10px', transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.borderBottom = '2px solid black'}
            onMouseLeave={(e) => e.target.style.borderBottom = '2px solid transparent'}
          >
            Project List
          </button>
        </div>
      </div>

      <div style={{marginTop: '200px', width: '80%', maxWidth: '800px', textAlign: 'left' }}>
        <h2 style={{fontSize: '24px', textAlign: 'center'}}>FAQ</h2>
        <div>
          <div style={{marginBottom: '15px' }}>
            <div
              style={{fontSize: '18px', cursor: 'pointer', padding: '10px', backgroundColor: '#f0f0f0', border: '1px solid #ddd'}}
              onClick={() => toggleFAQ(0)}
            >
              What is the purpose of this website?
            </div>
            {openFAQ === 0 && (
              <div style={{padding: '10px' }}>
                The Socket is a website for University of Florida ECE students to share their projects and find collaborators.
              </div>
            )}
          </div>
          <div>
          <div style={{marginBottom: '15px' }}>
            <div
              style={{fontSize: '18px', cursor: 'pointer', padding: '10px', backgroundColor: '#f0f0f0', border: '1px solid #ddd' }}
              onClick={() => toggleFAQ(1)}
            >
              How do you use the website?
            </div>
            {openFAQ === 1 && (
              <div style={{padding: '10px' }}>
                Click "login/register" to make a user account. You will need a @ufl.edu email to register. Once registered, you can view user projects and submit your own project to be published on the website. Your submission will need to be approved by administration.
               </div>
            )}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default HomePage;