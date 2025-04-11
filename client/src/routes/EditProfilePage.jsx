import React from 'react'
import NavHeader from '../components/NavHeader'

import EditProfile from '../components/EditProfile'

const EditProfilePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavHeader/>
      <EditProfile/>
    </div>
  );
}

export default EditProfilePage