import React, { useState, useEffect } from 'react';
import NavHeader from '../components/NavHeader'
import UserHeader from '../components/UserHeader';
import api from '../api/api';

const HomePage = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [username, setUsername] = useState(null);
  const [loggedIn, setLoginStatus] = useState(false);
  
  useEffect(() => {
    const fetchUsername = async () => {
        try {
            const token = localStorage.getItem('authToken');
            if (!token) {
                setLoginStatus(false);
                console.error("Error no token");
                return;
            }
            else {
              //only send a response if we have a token
              setLoginStatus(true);
              const response = await api.get(`/users/decode`, {
                headers: {
                    Authorization: `${token}`, // Send the token in the header
                },
            });
              setUsername(response.data);
            }
            
        } catch (error) {
            console.error("Error getting username:", error);
        }
    };

    fetchUsername();
}, []);


  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div>
      {loggedIn ? <UserHeader/> : <NavHeader />}
      {loggedIn ? <h2 style={{marginTop: '50px', fontSize: '24px', textAlign: 'center'}}>Welcome Back {username}!</h2> : ""}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
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
    </div>
  );
};

export default HomePage;