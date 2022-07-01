import React, { Component } from "react";
import Register from "./Register";

export default class Login extends Component {
  render() {
    return (
      <main>
        <div className="container">
          <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                  <div class="d-flex justify-content-center py-4">
                    <a
                      href="index.html"
                      class="logo d-flex align-items-center w-auto"
                    >
                      <img src="assets/img/logo.png" alt="" />
                      <span class="d-none d-lg-block">Tiphunzire.com</span>
                    </a>
                  </div>

                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="pt-4 pb-2">
                        <h5 className="card-title text-center pb-0 fs-4">
                          Login to <br />
                          Your Account
                        </h5>
                        <p className="text-center small"></p>
                      </div>

                      <form className="row g-3 needs-validation" novalidate>
                        <div className="col-12">
                          <label for="yourUsername" className="form-label">
                            Username
                          </label>
                          <div className="input-group has-validation">
                            <span
                              className="input-group-text"
                              id="inputGroupPrepend"
                            >
                              <i className="fa fa-user"></i>
                            </span>
                            <input
                              type="text"
                              name="username"
                              className="form-control"
                              id="yourUsername"
                              required
                            />
                            <div className="invalid-feedback">
                              Please enter your username.
                            </div>
                          </div>
                        </div>

                        <div className="col-12">
                          <label for="yourPassword" className="form-label">
                            Password
                          </label>
                          <div className="input-group has-validation">
                            <span className="input-group-text">
                              <i className="fa fa-key"></i>
                            </span>

                            <input
                              type="password"
                              name="password"
                              className="form-control"
                              id="yourPassword"
                              required
                            />
                            <div className="invalid-feedback">
                              Please enter your password!
                            </div>
                          </div>
                        </div>

                        <div className="col-12">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="remember"
                              value="true"
                              id="rememberMe"
                            />
                            <label
                              className="form-check-label"
                              for="rememberMe"
                            >
                              Remember me
                            </label>
                          </div>
                        </div>
                        <div className="col-12">
                          <button
                            className="btn btn-primary w-100"
                            type="submit"
                          >
                            Login
                          </button>
                        </div>
                        <div className="col-12">
                          <p className="small mb-0">
                            Don't have Account?{" "}
                            <a href="pages-register.html">Create An Account</a>
                          </p>
                        </div>
                      </form>
                    </div>
                  </div>

                  <div className="credits">
                    Powered by <a href="#">Tiphunzire.com</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    );
  }
}
