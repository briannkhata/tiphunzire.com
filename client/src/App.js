import React, { Component } from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Users/Dashboard";
import AdminList from "./components/Users/AdminList";
import ExpiredList from "./components/Users/ExpiredList";
import CreateUser from "./components/Users/CreateUser";
import StudentList from "./components/Users/StudentList";
import EditUser from "./components/Users/EditUser";

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/admins" element={<AdminList />} />
            <Route path="/students" element={<StudentList />} />
            <Route path="/expired" element={<ExpiredList />} />
            <Route path="/createUser" element={<CreateUser />} />
            <Route path="/editUser/:UserId" element={<EditUser />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
