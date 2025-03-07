import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavHeader from '../components/NavHeader'
import UserProfile from '../components/UserProfile'
import api from "../api/api";

const UserProfilePage = () => {
    return (
        <div>
            <NavHeader />
            <UserProfile />
        </div>
      )
};

export default UserProfilePage;