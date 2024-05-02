import * as React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import SignIn from "./pages/signIn";
import SignUp from "./pages/createAccount";
import App from "./pages/ColorChange";
import MainPage from "./pages/MainPage";

export default function NavBar() {
  return (
    <Router>
      <header style={{ padding: "30px 10px", backgroundColor: "#121212" }}>
        <NavLink
          to="/"
          style={{ 
            textDecoration: "none", 
            margin: "0px 10px", 
            padding: "5px 10px", 
            backgroundColor: "#272727", 
            borderRadius: "100px", }}
        >
          Home
        </NavLink>
        <NavLink 
        to="/signUp" 
        style={{ 
          textDecoration: "none", 
          margin: "0px 10px", 
          padding: "5px 10px", 
          backgroundColor: "#272727", 
          borderRadius: "100px", }}
        >
          Sign Up
        </NavLink>
        <NavLink 
        to="/signIn" 
        style={{ 
          textDecoration: "none", 
          margin: "0px 10px", 
          padding: "5px 10px", 
          backgroundColor: "#272727", 
          borderRadius: "100px",
          }}
        >
          Sign In
        </NavLink>
        <NavLink 
        to="/ColorChange" 
        style={{ 
          textDecoration: "none", 
          margin: "0px 10px", 
          padding: "5px 10px", 
          backgroundColor: "#272727", 
          borderRadius: "100px", }}
        >
          Color picker
        </NavLink>
      </header>
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/ColorChange" element={<App />} />
        </Routes>
      </div>
    </Router>
  );
}
