import React, { useEffect, useState } from "react";
import UserProfile from '../components/UserProfile'
import NavHeader from "../components/NavHeader";

const UserProfilePage = () => {
    return (
        <div>
            <NavHeader />
            <UserProfile />
        </div>
      )
};

export default UserProfilePage;