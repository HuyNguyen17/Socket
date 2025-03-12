import React from 'react'
import NavHeader from '../components/NavHeader'
import { useLocation } from 'react-router-dom'

const SignupResultPage = () => {
  const {state} = useLocation();
  const SUCCESS_MESSAGE = "Signup successful. You can now login to your account!";
  const FAILURE_MESSAGE = "Signup failed. User/email taken or blank field entered. ";
  return (
    <div>
        <NavHeader />
        <p>
            {state.success ? SUCCESS_MESSAGE : FAILURE_MESSAGE}
        </p>
    </div>
  )
}

export default SignupResultPage;