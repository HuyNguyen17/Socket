import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./routes/HomePage";
import LoginPage from "./routes/LoginPage";
import LogoutPage from "./routes/LogoutPage";
import SignupPage from "./routes/SignupPage"
import UsersListPage from "./routes/UsersListPage";
import ProjectsListPage from "./routes/ProjectsListPage";
import UserProfilePage from "./routes/UserProfilePage";
import SignupResultPage from "./routes/SignupResult";
import ProjectResultPage from "./routes/ProjectResult";
import ProjectCreationPage from "./routes/ProjectCreationPage";
<<<<<<< HEAD
import EditProfilePage from "./routes/EditProfilePage";
=======
>>>>>>> 8642c5f (Added an option to create a project and save it to backend.)

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/logout" element={<LogoutPage/>}/>
        <Route path="/users" element={<UsersListPage/>}/>
        <Route path="/projects" element={<ProjectsListPage/>}/>
        <Route path="/signup-result" element={<SignupResultPage/>}/>
        <Route path="/users/:username" element={<UserProfilePage/>}/>
        <Route path="/create-project" element={<ProjectCreationPage/>}/>
        <Route path="/project-create-result" element={<ProjectResultPage/>}/>
<<<<<<< HEAD
        <Route path="/edit-profile" element={<EditProfilePage/>}/>
=======
>>>>>>> 8642c5f (Added an option to create a project and save it to backend.)
      </Routes>
    </Router>
  );
};

export default App;
