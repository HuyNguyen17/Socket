import React, {Fragment} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import UserSignup from './components/UserSignup';
import HomePage from "./routes/HomePage";
import LoginPage from "./routes/LoginPage";
import UsersListPage from "./routes/UsersListPage";
import UserProfile from "./routes/UserProfile";
import ProjectsListPage from "./routes/ProjectsListPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/users" element={<UsersListPage/>}/>
        <Route path="/profile/:username" element={<UserProfile/>}/>
        <Route path="/projects" element={<ProjectsListPage/>}/>
      </Routes>
    </Router>
  );
};

export default App;
