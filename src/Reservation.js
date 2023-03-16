import React from 'react';

function Reservation() {
  return (
    <>

      <>
        {/* Navbar Start */}
        <div className="container-fluid p-0 nav-bar">
          <nav className="navbar navbar-expand-lg bg-none navbar py-3">
            <a href="index.html" className="navbar-brand px-lg-4 m-0">
              <h1 className="m-0 display-4 text-uppercase text-white logo">KOPPEE</h1>
            </a>
            <button
              type="button"
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse justify-content-between"
              id="navbarCollapse"
            >
              <div className="navbar-nav text-text ml-auto p-4">
                <a href="Home" className="nav-item nav-link">
                  Home
                </a>
                <a href="About" className="nav-item nav-link">
                  About
                </a>
                <a href="Service" className="nav-item nav-link">
                  Service
                </a>
                <a href="Menu" className="nav-item nav-link">
                  Menu
                </a>
                <div className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle active"
                    data-toggle="dropdown"
                  >
                    Pages
                  </a>
                  <div className="dropdown-menu text-capitalize">
                    <a href="reservation" className="dropdown-item active">
                      Reservation
                    </a>
                    <a href="testimonial" className="dropdown-item">
                      Testimonial
                    </a>
                  </div>
                </div>
                <a href="contact" className="nav-item nav-link">
                  Contact
                </a>
              </div>
            </div>
          </nav>
        </div>
        {/* Navbar End */}
        {/* Page Header Start */}
        <div className="container-fluid page-header mb-5 position-relative overlay-bottom">
          <div
            className="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5"
            style={{ minHeight: 400 }}
          >
            <h1 className="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase">
              Reservation
            </h1>
            <div className="d-inline-flex mb-lg-5">
              <p className="m-0 text-white">
                <a className="text-white" href="">
                  Home
                </a>
              </p>
              <p className="m-0 text-white px-2">/</p>
              <p className="m-0 text-white">Reservation</p>
            </div>
          </div>
        </div>
        {/* Page Header End */}
        {/* Reservation Start */}
        <div className="container-fluid py-5">
          <div className="container">
            <div className="reservation position-relative overlay-top overlay-bottom">
              <div className="row align-items-center">
                <div className="col-lg-6 my-5 my-lg-0">
                  <div className="p-5">
                    <div className="mb-4">
                      <h1 className="display-3 text-primary">30% OFF</h1>
                      <h1 className="text-white">For Online Reservation</h1>
                    </div>
                    <p className="text-white">
                      Lorem justo clita erat lorem labore ea, justo dolor lorem ipsum
                      ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo sed sed
                      diam. Ea et erat ut sed diam sea
                    </p>
                    <ul className="list-inline text-white m-0">
                      <li className="py-2">
                        <i className="fa fa-check text-primary mr-3" />
                        Lorem ipsum dolor sit amet
                      </li>
                      <li className="py-2">
                        <i className="fa fa-check text-primary mr-3" />
                        Lorem ipsum dolor sit amet
                      </li>
                      <li className="py-2">
                        <i className="fa fa-check text-primary mr-3" />
                        Lorem ipsum dolor sit amet
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div
                    className="text-center p-5"
                    style={{ background: "rgba(51, 33, 29, .8)" }}
                  >
                    <h1 className="text-white mb-4 mt-5">Book Your Table</h1>
                    <form className="mb-5">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control bg-transparent border-primary p-4"
                          placeholder="Name"
                          required="required"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control bg-transparent border-primary p-4"
                          placeholder="Email"
                          required="required"
                        />
                      </div>
                      <div className="form-group">
                        <div className="date" id="date" data-target-input="nearest">
                          <input
                            type="text"
                            className="form-control bg-transparent border-primary p-4 datetimepicker-input"
                            placeholder="Date"
                            data-target="#date"
                            data-toggle="datetimepicker"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="time" id="time" data-target-input="nearest">
                          <input
                            type="text"
                            className="form-control bg-transparent border-primary p-4 datetimepicker-input"
                            placeholder="Time"
                            data-target="#time"
                            data-toggle="datetimepicker"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <select
                          className="custom-select bg-transparent border-primary px-4"
                          style={{ height: 49 }}
                        >
                          <option selected="">Person</option>
                          <option value={1}>Person 1</option>
                          <option value={2}>Person 2</option>
                          <option value={3}>Person 3</option>
                          <option value={3}>Person 4</option>
                        </select>
                      </div>
                      <div>
                        <button
                          className="btn btn-primary btn-block font-weight-bold py-3"
                          type="submit"
                        >
                          Book Now
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Reservation End */}
        {/* Footer Start */}
        <div className="container-fluid footer text-white mt-5 pt-5 px-0 position-relative overlay-top">
          <div className="row mx-0 pt-5 px-sm-3 px-lg-5 mt-4">
            <div className="col-lg-3 col-md-6 mb-5">
              <h4
                className="text-white text-uppercase mb-4"
                style={{ letterSpacing: 3 }}
              >
                Get In Touch
              </h4>
              <p>
                <i className="fa fa-map-marker-alt mr-2" />
                123 Street, New York, USA
              </p>
              <p>
                <i className="fa fa-phone-alt mr-2" />
                +012 345 67890
              </p>
              <p className="m-0">
                <i className="fa fa-envelope mr-2" />
                info@example.com
              </p>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
              <h4
                className="text-white text-uppercase mb-4"
                style={{ letterSpacing: 3 }}
              >
                Follow Us
              </h4>
              <p>Amet elitr vero magna sed ipsum sit kasd sea elitr lorem rebum</p>
              <div className="d-flex justify-content-start">
                <a
                  className="btn btn-lg btn-outline-light btn-lg-square mr-2"
                  href="#"
                >
                  <i className="fab fa-twitter" />
                </a>
                <a
                  className="btn btn-lg btn-outline-light btn-lg-square mr-2"
                  href="#"
                >
                  <i className="fab fa-facebook-f" />
                </a>
                <a
                  className="btn btn-lg btn-outline-light btn-lg-square mr-2"
                  href="#"
                >
                  <i className="fab fa-linkedin-in" />
                </a>
                <a className="btn btn-lg btn-outline-light btn-lg-square" href="#">
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
              <h4
                className="text-white text-uppercase mb-4"
                style={{ letterSpacing: 3 }}
              >
                Open Hours
              </h4>
              <div>
                <h6 className="text-white text-uppercase">Monday - Friday</h6>
                <p>8.00 AM - 8.00 PM</p>
                <h6 className="text-white text-uppercase">Saturday - Sunday</h6>
                <p>2.00 PM - 8.00 PM</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
              <h4
                className="text-white text-uppercase mb-4"
                style={{ letterSpacing: 3 }}
              >
                Newsletter
              </h4>
              <p>Amet elitr vero magna sed ipsum sit kasd sea elitr lorem rebum</p>
              <div className="w-100">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control border-light"
                    style={{ padding: 25 }}
                    placeholder="Your Email"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-primary font-weight-bold px-3">
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="container-fluid text-center text-white border-top mt-4 py-4 px-sm-3 px-md-5"
            style={{ borderColor: "rgba(256, 256, 256, .1) !important" }}
          >
            <p className="mb-2 text-white">
              Copyright ©{" "}
              <a className="font-weight-bold" href="#">
                Domain
              </a>
              . All Rights Reserved.
            </p>
            <p className="m-0 text-white">
              Designed by{" "}
              <a className="font-weight-bold" href="https://htmlcodex.com">
                HTML Codex
              </a>
            </p>
          </div>
        </div>
        {/* Footer End */}
      </>

    </>
  )
}

export default Reservation;