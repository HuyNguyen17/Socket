import React from 'react'
import NavHeader from '../components/NavHeader'

const LogoutPage = () => {
  localStorage.removeItem('authToken'); 
  return (
    <div>
      <NavHeader/>
      <div style={{textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
        <p style={{fontSize: '24px', marginTop: '20px'}}>
          Successfully logged out!
        </p>
      </div>
    </div>
  );
}

export default LogoutPage;