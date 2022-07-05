import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import Menu from "./Menu";

const AddEdit = () => {
  const [user, setUser] = useState();
  const [grades, setGrades] = useState([]);
  const [plans, setPlans] = useState([]);
  const [Name, setName] = useState();
  const [UserName, setUserName] = useState();
  const [Email, setEmail] = useState();
  const [Dob, setDob] = useState();
  const [Phone, setPhone] = useState();
  const [PlanId, setPlanID] = useState();
  const [GradeId, setGradeId] = useState();

  const { UserId } = useParams();

  const url = `http://localhost:5000/api/v1/user/getById/${UserId}`;

  useEffect(() => {
    getUserById();
    getGrades();
    getPlans();
  }, []);

  const getUserById = async () => {
    const response = await axios.get(url);
    setUser(response.data);
  };

  const getGrades = async () => {
    const response = await axios.get(
      "http://localhost:5000/api/v1/grade/grades"
    );
    setGrades(response.data);
  };

  const getPlans = async () => {
    const response = await axios.get("http://localhost:5000/api/v1/plan/plans");
    setPlans(response.data);
  };
  return (
    <div>
      <Header />
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Create User</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="javascript;">Home</a>
              </li>
              <li className="breadcrumb-item">Create User</li>
            </ol>
          </nav>
        </div>
        <Menu />
        <section className="section">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <p></p>
                  {user?.map((user, index) => (
                    <form className="row g-3">
                      <div className="col-md-12">
                        <label for="inputName5" className="form-label">
                          Name
                        </label>
                        <input
                          type="text"
                          value={Name}
                          name="Name"
                          onChange={(e) => setName(e.target.value)}
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-6">
                        <label for="inputEmail5" className="form-label">
                          Username
                        </label>
                        <input
                          type="text"
                          value={UserName}
                          name="UserName"
                          onChange={(e) => setUserName(e.target.value)}
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-6">
                        <label for="inputPassword5" className="form-label">
                          Password
                        </label>
                        <input
                          type="password"
                          name="PassWord"
                          className="form-control"
                        />
                      </div>
                      <div className="col-6">
                        <label for="inputAddress5" className="form-label">
                          Phone
                        </label>
                        <input
                          type="text"
                          value={Phone}
                          name="Phone"
                          onChange={(e) => setPhone(e.target.value)}
                          className="form-control"
                        />
                      </div>
                      <div className="col-6">
                        <label for="inputAddress2" className="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          value={Email}
                          name="Email"
                          onChange={(e) => setEmail(e.target.value)}
                          className="form-control"
                        />
                      </div>
                      <div className="col-12">
                        <label for="inputAddress2" className="form-label">
                          Date of Birth
                        </label>
                        <input
                          type="date"
                          value={Dob}
                          name="Dob"
                          onChange={(e) => setDob(e.target.value)}
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-6">
                        <label for="inputCity" className="form-label">
                          Class
                        </label>
                        <select id="classId" className="form-select">
                          <option selected>Choose Grade</option>
                          {grades?.map((grade, index) => (
                            <option value={grade.GradeId}>{grade.Grade}</option>
                          ))}
                        </select>
                      </div>
                      <div className="col-md-6">
                        <label for="inputState" className="form-label">
                          Plan
                        </label>
                        <select id="PlanId" className="form-select">
                          <option selected>Choose Plan</option>
                          {plans?.map((plan, index) => (
                            <option value={plan.PlanId}>{plan.Plan}</option>
                          ))}
                        </select>
                      </div>

                      <div className="">
                        <button type="submit" className="btn btn-primary">
                          Save
                        </button>
                      </div>
                    </form>
                  ))}
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
export default AddEdit;
