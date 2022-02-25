import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Counter from "./Components/Counter";
import Login from "./Components/Login";
import User from "./Components/User";
import NavBar from './Components/Navbar'


const Routers = () => {
  return (
    <div className="container">
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Navigate replace to="/counter" />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Routers;
