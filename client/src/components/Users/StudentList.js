import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Menu from "./Menu";
import Header from "./Header";
import Footer from "./Footer";

const StudentList = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/api/v1/user/students/").then((res) => {
      setUsers(res.data);
    });
  }, []);
  return (
    <div>
      <Header />
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Students</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="::">Home</a>
              </li>
              <li className="breadcrumb-item">Students</li>
            </ol>
          </nav>
        </div>
        <Menu />
        <section className="section">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Students</h5>
                  <hr />
                  <table className="table datatable">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Username</th>
                        <th scope="col">Dob</th>
                        <th scope="col">Class</th>
                        <th scope="col">Plan</th>
                        <th scope="col">Date Joined</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user, index) => (
                        <tr key={index}>
                          <th scope="row">{index + 1}</th>
                          <td>{user.Name}</td>
                          <td>{user.Username}</td>
                          <td>{user.Dob}</td>
                          <td>{user.ClassId}</td>
                          <td>{user.PlanId}</td>
                          <td>{user.DateAdded}</td>
                          <td>
                            <div className="btn-group">
                              <Link
                                to={`/editUser/${user.UserId}`}
                                className="btn btn-sm btn-info"
                              >
                                Edit
                              </Link>
                              <button className="btn btn-sm btn-warning">
                                De-Activate
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
export default StudentList;
