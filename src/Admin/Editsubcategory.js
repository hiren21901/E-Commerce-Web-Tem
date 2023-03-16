import axios from "axios";
// import { set } from "mongoose";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";


function Editsubcategory() {

    const navigate = useNavigate()
    const [subcategoryname, setsubcategoryname] = useState("");

    const params = useParams();

    useEffect(() => {
        axios.get(`http://localhost:5000/Subcategory/ShowOneSubCategory/${params.id}`, {
        })

            .then(function (response) {
                console.log(response.data);
                setsubcategoryname(response.data.data.setsubcategoryname)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])



    const submit = (e) => {

        e.preventDefault();
        axios.patch(`http://localhost:5000/Subcategory/UpdateSubCategory/${params.id}`, {
            subcategoryname: subcategoryname,

        })
            .then(function (response) {
                console.log(response);
                setsubcategoryname('')
                navigate('/Showsubcategory')
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    return (
        <>


            <>
                <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                    {/* Left navbar links */}
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" data-widget="pushmenu" href="#" role="button">
                                <i className="fas fa-bars" />
                            </a>
                        </li>
                        <li className="nav-item d-none d-sm-inline-block">
                            <a href="../../index3.html" className="nav-link">
                                Home
                            </a>
                        </li>
                        <li className="nav-item d-none d-sm-inline-block">
                            <a href="#" className="nav-link">
                                Contact
                            </a>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                data-widget="navbar-search"
                                href="#"
                                role="button"
                            >
                                <i className="fas fa-search" />
                            </a>
                            <div className="navbar-search-block">
                                <form className="form-inline">
                                    <div className="input-group input-group-sm">
                                        <input
                                            className="form-control form-control-navbar"
                                            type="search"
                                            placeholder="Search"
                                            aria-label="Search"
                                        />
                                        <div className="input-group-append">
                                            <button className="btn btn-navbar" type="submit">
                                                <i className="fas fa-search" />
                                            </button>
                                            <button
                                                className="btn btn-navbar"
                                                type="button"
                                                data-widget="navbar-search"
                                            >
                                                <i className="fas fa-times" />
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                data-widget="fullscreen"
                                href="#"
                                role="button"
                            >
                                <i className="fas fa-expand-arrows-alt" />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                data-widget="control-sidebar"
                                data-slide="true"
                                href="#"
                                role="button"
                            >
                                <i className="fas fa-th-large" />
                            </a>
                        </li>
                    </ul>
                </nav>
                {/* /.navbar */}
                {/* Main Sidebar Container */}
                <aside className="main-sidebar sidebar-dark-primary elevation-4">
                    {/* Brand Logo */}
                    <a href="../../index3.html" className="brand-link">
                        <img
                            src="../../dist/img/AdminLTELogo.png"
                            alt="AdminLTE Logo"
                            className="brand-image img-circle elevation-3"
                            style={{ opacity: ".8" }}
                        />
                        <span className="brand-text font-weight-light">AdminLTE 3</span>
                    </a>
                    {/* Sidebar */}
                    <div className="sidebar">
                        {/* Sidebar user (optional) */}
                        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                            <div className="image">
                                <img
                                    src="../../dist/img/user2-160x160.jpg"
                                    className="img-circle elevation-2"
                                    alt="User Image"
                                />
                            </div>
                            <div className="info">
                                <a href="#" className="d-block">
                                    Alexander Pierce
                                </a>
                            </div>
                        </div>
                        <nav className="mt-2">
                            <ul
                                className="nav nav-pills nav-sidebar flex-column"
                                data-widget="treeview"
                                role="menu"
                                data-accordion="false"
                            >
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon fas fa-edit" />
                                        <p>
                                            Brand
                                            <i className="fas fa-angle-left right" />
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <Link to='/addbrand'><a
                                                href="./pages/forms/RegShowTables.php"
                                                className="nav-link"
                                            >
                                                <i className="far fa-circle nav-icon" />
                                                <p>Add Brand</p>
                                            </a></Link>
                                        </li>
                                    </ul>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <Link to='/showbrand'><a
                                                href="./pages/forms/RegShowTables.php"
                                                className="nav-link"
                                            >
                                                <i className="far fa-circle nav-icon" />
                                                <p>Show Brand</p>
                                            </a></Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon fas fa-chart-pie" />
                                        <p>
                                            Category
                                            <i className="right fas fa-angle-left" />
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <Link to='/addcategory'><a
                                                href="./pages/forms/BookShowTables.php"
                                                className="nav-link"
                                            >
                                                <i className="far fa-circle nav-icon" />
                                                <p>Add Category</p>
                                            </a></Link>
                                        </li>
                                    </ul>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <Link to='/showcategory'><a
                                                href="#"
                                                className="nav-link"
                                            >
                                                <i className="far fa-circle nav-icon" />
                                                <p>Show Category</p>
                                            </a></Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon fas fa-tree" />
                                        <p>
                                            Sub Category
                                            <i className="fas fa-angle-left right" />
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <Link to='/addsubcategory'><a href="./pages/forms/ContactShow.php" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Add SubCategory</p>
                                            </a></Link>
                                        </li>
                                    </ul>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <Link to='/showsubcategory'><a href="./pages/forms/ContactShow.php" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Show SubCategory</p>
                                            </a></Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon fas fa-edit" />
                                        <p>
                                            Add Product
                                            <i className="fas fa-angle-left right" />
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <Link to='/addproduct'><a href="./pages/forms/AddProduct.php" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Add</p>
                                            </a></Link>
                                        </li>
                                    </ul>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <Link to='/showproduct'><a href="./pages/forms/ShowProduct.php" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Show</p>
                                            </a></Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon fas fa-table" />
                                        <p>
                                            Buy Now
                                            <i className="fas fa-angle-left right" />
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <a href="./pages/forms/BuyNow.php" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Show Tables</p>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon fas fa-table" />
                                        <p>
                                            New Sletter
                                            <i className="fas fa-angle-left right" />
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <a
                                                href="./pages/forms/NewsletterShow.php"
                                                className="nav-link"
                                            >
                                                <i className="far fa-circle nav-icon" />
                                                <p>Show Tables</p>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </aside>

                <div className="content-wrapper">
                    {/* Content Header (Page header) */}
                    <section className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1>SubCategory Form</h1>
                                </div>
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-right">
                                        <li className="breadcrumb-item">
                                            <a href="#">Home</a>
                                        </li>
                                        <li className="breadcrumb-item active">SubCategory Form</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        {/* /.container-fluid */}
                    </section>
                    {/* Main content */}
                    <section className="content">
                        <div className="container-fluid">
                            <div className="row">
                                {/* left column */}
                                <div className="col-md-6">
                                    {/* general form elements */}
                                    <div className="card card-primary">
                                        <div className="card-header">
                                            <h3 className="card-title">SubCategory Data</h3>
                                        </div>
                                        {/* /.card-header */}
                                        {/* form start */}
                                        <form>
                                            <div className="card-body">
                                                <div className="form-group">
                                                    <label htmlFor="inputName">SubCategory Name :</label>
                                                    <input
                                                        type="text"
                                                        id="inputName"
                                                        className="form-control"
                                                        value={subcategoryname}
                                                        onChange={(e) => {
                                                            setsubcategoryname(e.target.value);
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            {/* /.card-body */}
                                            <div className="card-footer">
                                                <button type="button" className="btn btn-primary" onClick={submit}>
                                                    Submit
                                                </button>
                                            </div>
                                        </form>
                                    </div>

                                </div>
                                {/*/.col (left) */}

                            </div>
                            {/* /.row */}
                        </div>
                        {/* /.container-fluid */}
                    </section>
                    {/* /.content */}
                </div>
            </>


        </>
    )
}

export default Editsubcategory;
