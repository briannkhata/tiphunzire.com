import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import Menu from "./Menu";
import Header from "./Header";
import Footer from "./Footer";

const StudentList = () => {
  const [students, setStudents] = useState([]);

  const url = "http://localhost:5000/api/v1/user/students";
  //const url2 = `http://localhost:5000/api/v1/user/delete/${UserId}`;

  const getStudents = async () => {
    const res = await axios.get(url);
    setStudents(res.data);
  };

  /*const deleteUser = async (UserId) => {
    await axios.delete(url2);
    getStudents();
  };*/

  useEffect(() => {
    getStudents();
    //deleteUser();
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
                      {students.map((student, index) => (
                        <tr key={student.UserId}>
                          <td>
                            <i className="fa fa-user-circle"></i> &nbsp;
                            {student.Name}
                          </td>
                          <td>{student.Username}</td>
                          <td>{student.Dob}</td>
                          <td>{student.ClassId}</td>
                          <td>{student.PlanId}</td>
                          <td>{student.DateAdded}</td>
                          <td>
                            <div className="btn-group">
                              <Link
                                to={`/addEdit/${student.UserId}`}
                                className="btn btn-sm btn-info"
                              >
                                Edit
                              </Link>

                              <button
                                /*onClick={() => deleteUser(student.UserId)}*/
                                className="btn btn-sm btn-warning"
                              >
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
