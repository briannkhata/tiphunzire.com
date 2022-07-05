import React, { Component } from "react";
import Menu from "./Menu";
import Header from "./Header";
import Footer from "./Footer";

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Header />
        <main id="main" class="main">
          <div class="pagetitle">
            <h1>Dashboard</h1>
            <nav>
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li class="breadcrumb-item active">Dashboard</li>
              </ol>
            </nav>
          </div>
          <Menu />
          <section class="section dashboard">
            <div class="row">
              <div class="col-lg-12">
                <div class="row">
                  <div class="col-xxl-4 col-md-4">
                    <div class="card info-card sales-card">
                      <div class="card-body">
                        <h5 class="card-title">Students</h5>

                        <div class="d-flex align-items-center">
                          <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                            <i class="bi bi-cart"></i>
                          </div>
                          <div class="ps-3">
                            <h6>145</h6>
                            <span class="text-success small pt-1 fw-bold">
                              12%
                            </span>{" "}
                            <span class="text-muted small pt-2 ps-1">
                              increase
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-xxl-4 col-md-4">
                    <div class="card info-card revenue-card">
                      <div class="card-body">
                        <h5 class="card-title">Expired Accounts</h5>

                        <div class="d-flex align-items-center">
                          <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                            <i class="bi bi-currency-dollar"></i>
                          </div>
                          <div class="ps-3">
                            <h6>$3,264</h6>
                            <span class="text-success small pt-1 fw-bold">
                              8%
                            </span>{" "}
                            <span class="text-muted small pt-2 ps-1">
                              increase
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-xxl-4 col-md-4">
                    <div class="card info-card revenue-card">
                      <div class="card-body">
                        <h5 class="card-title">Plans</h5>

                        <div class="d-flex align-items-center">
                          <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                            <i class="bi bi-currency-dollar"></i>
                          </div>
                          <div class="ps-3">
                            <h6>$3,264</h6>
                            <span class="text-success small pt-1 fw-bold">
                              8%
                            </span>{" "}
                            <span class="text-muted small pt-2 ps-1">
                              increase
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-xxl-4 col-xl-12">
                    <div class="card info-card customers-card">
                      <div class="card-body">
                        <h5 class="card-title">Teachers</h5>

                        <div class="d-flex align-items-center">
                          <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                            <i class="bi bi-people"></i>
                          </div>
                          <div class="ps-3">
                            <h6>1244</h6>
                            <span class="text-danger small pt-1 fw-bold">
                              12%
                            </span>{" "}
                            <span class="text-muted small pt-2 ps-1">
                              decrease
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-xxl-4 col-xl-6">
                    <div class="card info-card customers-card">
                      <div class="card-body">
                        <h5 class="card-title">Classes</h5>

                        <div class="d-flex align-items-center">
                          <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                            <i class="bi bi-people"></i>
                          </div>
                          <div class="ps-3">
                            <h6>1244</h6>
                            <span class="text-danger small pt-1 fw-bold">
                              12%
                            </span>{" "}
                            <span class="text-muted small pt-2 ps-1">
                              decrease
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-xxl-4 col-xl-6">
                    <div class="card info-card customers-card">
                      <div class="card-body">
                        <h5 class="card-title">Videos</h5>

                        <div class="d-flex align-items-center">
                          <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                            <i class="bi bi-people"></i>
                          </div>
                          <div class="ps-3">
                            <h6>1244</h6>
                            <span class="text-danger small pt-1 fw-bold">
                              12%
                            </span>{" "}
                            <span class="text-muted small pt-2 ps-1">
                              decrease
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-xxl-4 col-xl-6">
                    <div class="card info-card customers-card">
                      <div class="card-body">
                        <h5 class="card-title">Files</h5>

                        <div class="d-flex align-items-center">
                          <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                            <i class="bi bi-people"></i>
                          </div>
                          <div class="ps-3">
                            <h6>1244</h6>
                            <span class="text-danger small pt-1 fw-bold">
                              12%
                            </span>{" "}
                            <span class="text-muted small pt-2 ps-1">
                              decrease
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-xxl-4 col-xl-6">
                    <div class="card info-card customers-card">
                      <div class="card-body">
                        <h5 class="card-title">Assignments</h5>

                        <div class="d-flex align-items-center">
                          <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                            <i class="bi bi-people"></i>
                          </div>
                          <div class="ps-3">
                            <h6>1244</h6>
                            <span class="text-danger small pt-1 fw-bold">
                              12%
                            </span>{" "}
                            <span class="text-muted small pt-2 ps-1">
                              decrease
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
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
