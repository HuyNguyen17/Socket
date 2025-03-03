import React from 'react'
import NavHeader from '../components/NavHeader'

import UserSignup from '../components/UserSignup'

const SignupPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavHeader/>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
        <h2 className="text-2xl font-semibold mb-4">Create an account</h2>
        <UserSignup/>
      </div>
    </div>
  );
}

export default SignupPage