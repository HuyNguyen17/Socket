import React from 'react'
import NavHeader from '../components/NavHeader'
import UserLogin from '../components/UserLogin'
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col min-h-screen">
      <NavHeader />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
        <h2 className="text-2xl font-semibold mb-4">Account Login</h2>
        <UserLogin />
        <h2 className="text-2xl font-semibold mb-4">New to The Socket?</h2>
        <button onClick={() => navigate('/signup')}> Create an account</button>
      </div>
    </div>
  );
};

export default LoginPage