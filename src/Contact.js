import React from "react";
import { Link } from "react-router-dom";


function Contact() {
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
                                <Link to={`/About`} className="nav-item nav-link active">
                                    About
                                </Link>
                                <Link to={`/Service`} className="nav-item nav-link">
                                    Service
                                </Link>
                                <Link to={`/Menu`} className="nav-item nav-link">
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
                            Contact
                        </h1>
                        <div className="d-inline-flex mb-lg-5">
                            <p className="m-0 text-white">
                                <a className="text-white" href="">
                                    Home
                                </a>
                            </p>
                            <p className="m-0 text-white px-2">/</p>
                            <p className="m-0 text-white">Contact</p>
                        </div>
                    </div>
                </div>
                {/* Page Header End */}
                {/* Contact Start */}
                <div className="container-fluid pt-5">
                    <div className="container">
                        <div className="section-title">
                            <h4
                                className="text-primary text-uppercase"
                                style={{ letterSpacing: 5 }}
                            >
                                Contact Us
                            </h4>
                            <h1 className="display-4">Feel Free To Contact</h1>
                        </div>
                        <div className="row px-3 pb-2">
                            <div className="col-sm-4 text-center mb-3">
                                <i className="fa fa-2x fa-map-marker-alt mb-3 text-primary" />
                                <h4 className="font-weight-bold">Address</h4>
                                <p>123 Street, New York, USA</p>
                            </div>
                            <div className="col-sm-4 text-center mb-3">
                                <i className="fa fa-2x fa-phone-alt mb-3 text-primary" />
                                <h4 className="font-weight-bold">Phone</h4>
                                <p>+012 345 6789</p>
                            </div>
                            <div className="col-sm-4 text-center mb-3">
                                <i className="far fa-2x fa-envelope mb-3 text-primary" />
                                <h4 className="font-weight-bold">Email</h4>
                                <p>info@example.com</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 pb-5">
                                <iframe
                                    style={{ width: "100%", height: 443 }}
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                                    frameBorder={0}
                                    allowFullScreen=""
                                    aria-hidden="false"
                                    tabIndex={0}
                                />
                            </div>
                            <div className="col-md-6 pb-5">
                                <div className="contact-form">
                                    <div id="success" />
                                    <form name="sentMessage" id="contactForm" noValidate="novalidate">
                                        <div className="control-group">
                                            <input
                                                type="text"
                                                className="form-control bg-transparent p-4"
                                                id="name"
                                                placeholder="Your Name"
                                                required="required"
                                                data-validation-required-message="Please enter your name"
                                            />
                                            <p className="help-block text-danger" />
                                        </div>
                                        <div className="control-group">
                                            <input
                                                type="email"
                                                className="form-control bg-transparent p-4"
                                                id="email"
                                                placeholder="Your Email"
                                                required="required"
                                                data-validation-required-message="Please enter your email"
                                            />
                                            <p className="help-block text-danger" />
                                        </div>
                                        <div className="control-group">
                                            <input
                                                type="text"
                                                className="form-control bg-transparent p-4"
                                                id="subject"
                                                placeholder="Subject"
                                                required="required"
                                                data-validation-required-message="Please enter a subject"
                                            />
                                            <p className="help-block text-danger" />
                                        </div>
                                        <div className="control-group">
                                            <textarea
                                                className="form-control bg-transparent py-3 px-4"
                                                rows={5}
                                                id="message"
                                                placeholder="Message"
                                                required="required"
                                                data-validation-required-message="Please enter your message"
                                                defaultValue={""}
                                            />
                                            <p className="help-block text-danger" />
                                        </div>
                                        <div>
                                            <button
                                                className="btn btn-primary font-weight-bold py-3 px-5"
                                                type="submit"
                                                id="sendMessageButton"
                                            >
                                                Send Message
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Contact End */}
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
export default Contact;