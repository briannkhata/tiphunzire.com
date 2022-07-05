import React, { Component } from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Users/Dashboard";
import AdminList from "./components/Users/AdminList";
import ExpiredList from "./components/Users/ExpiredList";
import CreateUser from "./components/Users/AddEdit";
import StudentList from "./components/Users/StudentList";
import AddEdit from "./components/Users/AddEdit";

export default class App extends Component {
  render() {
    return (
      <div>
        <ToastContainer position="top-center" />
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/admins" element={<AdminList />} />
            <Route path="/students" element={<StudentList />} />
            <Route path="/expired" element={<ExpiredList />} />
            <Route path="/createUser" element={<CreateUser />} />
            <Route path="/addEdit/:UserId" element={<AddEdit />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
