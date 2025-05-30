import React from 'react'
import NavHeader from '../components/NavHeader'
import UserLogin from '../components/UserLogin'

const LoginPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavHeader />
      <UserLogin />
    </div>
  );
};

export default LoginPage