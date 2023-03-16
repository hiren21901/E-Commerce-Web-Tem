import React from 'react';
import { Link } from 'react-router-dom';


function Menu() {
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
                <Link to={`/Home`} className="nav-item nav-link">
                  Home
                </Link>
                <Link to={`/About`} className="nav-item nav-link">
                  About
                </Link>
                <Link to={`/Service`} className="nav-item nav-link">
                  Service
                </Link>
                <Link to={`/Menu`} className="nav-item nav-link active">
                  Menu
                </Link>
                <div className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Pages
                  </a>
                  <div className="dropdown-menu text-capitalize">
                    <a href="reservation" className="dropdown-item">
                      Reservation
                    </a>
                    <a href="testimonial" className="dropdown-item">
                      Testimonial
                    </a>
                  </div>
                </div>
                <Link to={`/Contact`} className="nav-item nav-link">
                  Contact
                </Link>
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
              Menu
            </h1>
            <div className="d-inline-flex mb-lg-5">
              <p className="m-0 text-white">
                <a className="text-white" href="">
                  Home
                </a>
              </p>
              <p className="m-0 text-white px-2">/</p>
              <p className="m-0 text-white">Menu</p>
            </div>
          </div>
        </div>
        {/* Page Header End */}
        {/* Menu Start */}
        <div className="container-fluid pt-5">
          <div className="container">
            <div className="section-title">
              <h4
                className="text-primary text-uppercase"
                style={{ letterSpacing: 5 }}
              >
                Menu &amp; Pricing
              </h4>
              <h1 className="display-4">Competitive Pricing</h1>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <h1 className="mb-5">Hot Coffee</h1>
                <div className="row align-items-center mb-5">
                  <div className="col-4 col-sm-3">
                    <img
                      className="w-100 rounded-circle mb-3 mb-sm-0"
                      src={require('../src/Assets/img/menu-1.jpg')}
                      alt=""
                    />
                    <h5 className="menu-price">$5</h5>
                  </div>
                  <div className="col-8 col-sm-9">
                    <h4>Black Coffee</h4>
                    <p className="m-0">
                      Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et
                      lorem dolor
                    </p>
                  </div>
                </div>
                <div className="row align-items-center mb-5">
                  <div className="col-4 col-sm-3">
                    <img
                      className="w-100 rounded-circle mb-3 mb-sm-0"
                      src={require('../src/Assets/img/menu-2.jpg')}
                      alt=""
                    />
                    <h5 className="menu-price">$7</h5>
                  </div>
                  <div className="col-8 col-sm-9">
                    <h4>Chocolete Coffee</h4>
                    <p className="m-0">
                      Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et
                      lorem dolor
                    </p>
                  </div>
                </div>
                <div className="row align-items-center mb-5">
                  <div className="col-4 col-sm-3">
                    <img
                      className="w-100 rounded-circle mb-3 mb-sm-0"
                      src={require('../src/Assets/img/menu-3.jpg')}
                      alt=""
                    />
                    <h5 className="menu-price">$9</h5>
                  </div>
                  <div className="col-8 col-sm-9">
                    <h4>Coffee With Milk</h4>
                    <p className="m-0">
                      Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et
                      lorem dolor
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <h1 className="mb-5">Cold Coffee</h1>
                <div className="row align-items-center mb-5">
                  <div className="col-4 col-sm-3">
                    <img
                      className="w-100 rounded-circle mb-3 mb-sm-0"
                      src={require('../src/Assets/img/menu-1.jpg')}
                      alt=""
                    />
                    <h5 className="menu-price">$5</h5>
                  </div>
                  <div className="col-8 col-sm-9">
                    <h4>Black Coffee</h4>
                    <p className="m-0">
                      Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et
                      lorem dolor
                    </p>
                  </div>
                </div>
                <div className="row align-items-center mb-5">
                  <div className="col-4 col-sm-3">
                    <img
                      className="w-100 rounded-circle mb-3 mb-sm-0"
                      src={require('../src/Assets/img/menu-2.jpg')}
                      alt=""
                    />
                    <h5 className="menu-price">$7</h5>
                  </div>
                  <div className="col-8 col-sm-9">
                    <h4>Chocolete Coffee</h4>
                    <p className="m-0">
                      Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et
                      lorem dolor
                    </p>
                  </div>
                </div>
                <div className="row align-items-center mb-5">
                  <div className="col-4 col-sm-3">
                    <img
                      className="w-100 rounded-circle mb-3 mb-sm-0"
                      src={require('../src/Assets/img/menu-3.jpg')}
                      alt=""
                    />
                    <h5 className="menu-price">$9</h5>
                  </div>
                  <div className="col-8 col-sm-9">
                    <h4>Coffee With Milk</h4>
                    <p className="m-0">
                      Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et
                      lorem dolor
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Menu End */}
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
export default Menu;