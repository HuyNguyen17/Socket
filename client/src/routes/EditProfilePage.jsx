import React from 'react'
import NavHeader from '../components/NavHeader'

import EditProfile from '../components/EditProfile'

const EditProfilePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavHeader/>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
        <h2 className="text-2xl font-semibold mb-4">Editing Account</h2>
        <EditProfile/>
      </div>
    </div>
  );
}

export default EditProfilePage