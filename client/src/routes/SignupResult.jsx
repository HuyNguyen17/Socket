import React from 'react'
import NavHeader from '../components/NavHeader'
import { useLocation } from 'react-router-dom'

const SignupResultPage = () => {
  const {state} = useLocation();
  const SUCCESS_MESSAGE = "Signup successful. You can now login to your account!";
  const FAILURE_MESSAGE = "Signup failed. User/email taken or blank field entered. ";
  return (
    <div>
      <NavHeader/>
      <div style={{textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
        <p style={{fontSize: '24px', marginTop: '20px'}}>
          {state?.success ? SUCCESS_MESSAGE : FAILURE_MESSAGE}
        </p>
      </div>
    </div>
  );
}

export default SignupResultPage;