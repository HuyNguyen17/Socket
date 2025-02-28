import React, {Fragment} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./routes/HomePage";
import LoginPage from "./routes/LoginPage";
import SignupPage from "./routes/SignupPage"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
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
