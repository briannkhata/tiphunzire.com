import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Menu extends Component {
  render() {
    return (
      <div>
        <aside id="sidebar" className="sidebar">
          <ul className="sidebar-nav" id="sidebar-nav">
            <li className="nav-item">
              <Link to="/dashboard">
                <a className="nav-link">
                  <i className="bi bi-grid"></i>
                  <span>Dashboard</span>
                </a>
              </Link>
            </li>

            <li className="nav-item">
              <a
                className="nav-link collapsed"
                data-bs-target="#components-nav"
                data-bs-toggle="collapse"
                href="#"
              >
                <i className="fa fa-users"></i>
                <span>Manage Users</span>
                <i className="bi bi-chevron-down ms-auto"></i>
              </a>
              <ul
                id="components-nav"
                className="nav-content collapse "
                data-bs-parent="#sidebar-nav"
              >
                <li>
                  <Link to="/admins">
                    <i className="bi bi-circle"></i>
                    <span>Admin List</span>
                  </Link>
                </li>
                <li>
                  <Link to="/students">
                    <i className="bi bi-circle"></i>
                    <span>Students</span>
                  </Link>
                </li>
                <li>
                  <Link to="/teachers">
                    <i className="bi bi-circle"></i>
                    <span>Teachers</span>
                  </Link>
                </li>
                <li>
                  <Link to="/expired">
                    <i className="bi bi-circle"></i>
                    <span>Expired Accounts</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a
                className="nav-link collapsed"
                data-bs-target="#Tutorials"
                data-bs-toggle="collapse"
                href="#"
              >
                <i className="fa fa-file-o"></i>
                <span>Manage Tutorials</span>
                <i className="bi bi-chevron-down ms-auto"></i>
              </a>
              <ul
                id="Tutorials"
                className="nav-content collapse "
                data-bs-parent="#sidebar-nav"
              >
                <li>
                  <Link to="/admins">
                    <i className="bi bi-circle"></i>
                    <span>Videos List</span>
                  </Link>
                </li>
                <li>
                  <Link to="/students">
                    <i className="bi bi-circle"></i>
                    <span>Pdfs</span>
                  </Link>
                </li>
                <li>
                  <Link to="/expired">
                    <i className="bi bi-circle"></i>
                    <span>Other Links</span>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </aside>
      </div>
    );
  }
}
