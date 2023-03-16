import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { additem } from "./Store/CartSlice";


function ShowoneProduct() {

    const dispatch = useDispatch();



    const [view, setView] = useState([]);

    const params = useParams();

    const getproduct = () => {
        axios.get(`http://localhost:5000/addproduct/ShowOneproduct/${params.id}`)

            .then(function (response) {
                console.log(response.data.data);
                setView(response.data.data);
            })
            .catch(function (error) {
                console.log(error);
            })

    }
    useEffect(() => {
        getproduct();
    }, []);

    const handleadd = (view) =>{
        dispatch(additem(view));
    }

    return (
        <>

            <div className="hearder-topper">
                <h1>Your Product</h1>
            </div>

            <div className="Allover">
                <div className="row px-xl-5 d-flex">
                    <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                        <div className="product-item bg-light mb-4 ">
                            <div className="product-img position-relative overflow-hidden">
                                <img className="img-fluid w-100 h-1000" src={view.image} alt=""
                                />
                                {/* <div className="product-action cart-1">
                                    <Link to={`/Payment`} className="btn btn-outline-dark btn-square" href="">
                                        <i className="fa fa-shopping-cart" />

                                    </Link> 
                                    <a className="btn btn-outline-dark btn-square" href="">
                                        <i className="far fa-heart" />
                                    </a>
                                    <a className="btn btn-outline-dark btn-square" href="">
                                        <i className="fa fa-sync-alt" />
                                    </a>
                                    <a className="btn btn-outline-dark btn-square" href="">
                                        <i className="fa fa-search" />
                                    </a>
                                </div> */}
                            </div>
                            <div className="text-center py-4">
                                <a className="h1 text-decoration-none text-truncate" href="">
                                    {view.name}
                                </a>
                                <div className="d-flex align-items-center justify-content-center mt-2">
                                    <h5>${view.price}</h5>
                                    <h6 className="text-muted ml-2">
                                        {/* <del>$12300.00</del> */}
                                    </h6>
                                </div>
                                <div className="d-flex align-items-center justify-content-center mb-1">
                                    <div className="product-action cart-1">
                                        <small className="fa fa-star text-primary mr-1" />
                                        <small className="fa fa-star text-primary mr-1" />
                                        <small className="fa fa-star text-primary mr-1" />
                                        <small className="fa fa-star text-primary mr-1" />
                                        <small className="fa fa-star text-primary mr-1" />
                                        <small>(99)</small>
                                    </div>
                                </div>
                                <div className="product-action cart-1">
                                <Link to={`/Cart/${params.id}`} onClick={()=>handleadd(view)}><a className="btn btn-outline-dark btn-square" href="">
                                        <i className="fa fa-shopping-cart" />
                                    </a></Link>
                                    <a className="btn btn-outline-dark btn-square" href="">
                                        <i className="far fa-heart" />
                                    </a>
                                    <a className="btn btn-outline-dark btn-square" href="">
                                        <i className="fa fa-sync-alt" />
                                    </a>
                                    <a className="btn btn-outline-dark btn-square" href="">
                                        <i className="fa fa-search" />
                                    </a>
                                </div>
                                {/* <Link to={'/ShowoneProduct'} className='mt-3 btn btn-success' style={{ border: '3px solid',borderColor:'black', padding: '6px 25px' ,  margin:'9px 2px 30px 11px' }} >SHOW MORE</Link> */}
                            </div>
                        </div>
                    </div>


                </div>

                {/* ---------------------------------------------------------------------form action------------------------------------------------------------------------------------ */}

                <form>
                    <div className="ffff">
                        <div className="mainconcept">
                            <div className="login">
                                <h2>WRITE A COMMENT</h2>

                            </div>
                            <div className="input">
                                <div className="icon">
                                    <i class="fa-solid fa-user"></i>
                                    <input type="Name" required placeholder="Name" />
                                </div>
                            </div>

                            <div className="input">
                                <div className="icon">
                                    <i class="fa-solid fa-envelope"></i>
                                    <input type="email" required placeholder="Email" className="email" />
                                </div>
                            </div>

                            <div className="input">
                                <div className="icon">
                                    <i class="fa-solid fa-link"></i>
                                    <input type="URL" required placeholder="URl" />
                                </div>
                            </div>

                            <div className="input">
                                <div className="icon">
                                    <i class="fa-solid fa-comment"></i>
                                    <input type="Comment" required placeholder="Comment" />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>

            </div>


            <div className="hearder-bottom  ">

            </div>




        </>
    )
}

export default ShowoneProduct;