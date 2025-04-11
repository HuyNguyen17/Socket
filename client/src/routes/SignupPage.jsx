import React from 'react'
import NavHeader from '../components/NavHeader'

import UserSignup from '../components/UserSignup'

const SignupPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavHeader/>
      <UserSignup/>
    </div>
  );
}

export default SignupPage