import React from 'react'
import NavHeader from '../components/NavHeader'
import UserLogin from '../components/UserLogin'
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col min-h-screen">
      <NavHeader />
      <UserLogin />
    </div>
  );
};

export default LoginPage