import React, {Fragment} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import UserSignup from './components/UserSignup';
import HomePage from "./routes/HomePage";
import LoginPage from "./routes/LoginPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
      </Routes>
    </Router>
  );
};

// Version of App that shows our user login page
/*
function App() {
    return (
    <Fragment>
      <UserSignup />
    </Fragment>
    );
}
*/
export default App;
