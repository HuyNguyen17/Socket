import React, { useEffect, useState } from "react";
import ProjectProfile from "../components/ProjectProfile";
import NavHeader from "../components/NavHeader";

const ProjectProfilePage = () => {
    return (
        <div>
            <NavHeader />
            <ProjectProfile />
        </div>
      )
};

export default ProjectProfilePage;