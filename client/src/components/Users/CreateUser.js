import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Menu from "./Menu";
export default class CreateUser extends Component {
  render() {
    return (
      <div>
        <Header />
        <main id="main" className="main">
          <div className="pagetitle">
            <h1>Create User</h1>
            <nav>
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
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
                    <form className="row g-3">
                      <div className="col-md-12">
                        <label for="inputName5" className="form-label">
                          Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputName5"
                        />
                      </div>
                      <div className="col-md-6">
                        <label for="inputEmail5" className="form-label">
                          Username
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputEmail5"
                        />
                      </div>
                      <div className="col-md-6">
                        <label for="inputPassword5" className="form-label">
                          Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="inputPassword5"
                        />
                      </div>
                      <div className="col-6">
                        <label for="inputAddress5" className="form-label">
                          Phone
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputAddres5s"
                          placeholder="1234 Main St"
                        />
                      </div>
                      <div className="col-6">
                        <label for="inputAddress2" className="form-label">
                          Email
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputAddress2"
                          placeholder="Apartment, studio, or floor"
                        />
                      </div>
                      <div className="col-12">
                        <label for="inputAddress2" className="form-label">
                          Date of Birth
                        </label>
                        <input
                          type="date"
                          className="form-control"
                          id="inputAddress2"
                          placeholder="Apartment, studio, or floor"
                        />
                      </div>
                      <div className="col-md-6">
                        <label for="inputCity" className="form-label">
                          Class
                        </label>
                        <select id="classId" className="form-select">
                          <option selected>Choose...</option>
                          <option>...</option>
                        </select>
                      </div>
                      <div className="col-md-6">
                        <label for="inputState" className="form-label">
                          Plan
                        </label>
                        <select id="PlanId" className="form-select">
                          <option selected>Choose...</option>
                          <option>...</option>
                        </select>
                      </div>

                      <div className="">
                        <button type="submit" className="btn btn-primary">
                          Save User
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}
