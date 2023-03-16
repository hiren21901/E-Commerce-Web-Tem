import React from "react";
import { useEffect, useState } from "react";
import { Link, params, useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "./Store/CartSlice";
import {Showproduct} from "././"


function Cart() {
    // const product = useSelector((state)=>state.cart);
    // const item = useSelector((state)=>state.cart)


    // const dispatch = useDispatch();
    // const handleremove = (id)=>{
    //     dispatch(remove(id))
    // }


    const deletehendle = (id) => {
        
        axios.delete(`http://localhost:5000/addproduct/DeleteProduct/${id}`)        

            .then(function (response) {
                console.log(response.data);
                

            })

            .catch(function (error) {
                console.log(error);
            })
    }


    const [view, setView] = useState([]);

    const params = useParams();

    useEffect(() => {
        axios.get(`http://localhost:5000/addproduct/ShowOneproduct/${params.id}`)

            .then(function (response) {
                console.log(response.data.data);
                setView(response.data.data);
            })
            .catch(function (error) {
                console.log(error);
            })

    }, []   );

    return (
        <>

            <section className="h-300 h-custom" style={{ backgroundColor: "#d2c9ff" }}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12">
                            <div
                                className="card card-registration card-registration-2"
                                style={{ borderRadius: 15 }}
                            >
                                <div className="card-body p-0">
                                    <div className="row g-0">
                                        <div className="col-lg-8">
                                            <div className="p-5">
                                                <div className="d-flex justify-content-between align-items-center mb-5">
                                                    <h1 className="fw-bold mb-0 text-black">Shopping Cart</h1>
                                                    <h6 className="mb-0 text-muted">3 items</h6>
                                                </div>
                                                {/* {
                                                    product.map((product,id4)=>{
                                                        return(
                                                  
                                              */}
                                                <div className="row mb-4 d-flex justify-content-between align-items-center">
                                                    <div className="col-md-2 col-lg-2 col-xl-2">
                                                        <img src={view.image} className="img-fluid rounded-3" alt="" />
                                                    </div>
                                                    <div className="col-md-3 col-lg-3 col-xl-3">
                                                        <h5>Your Product</h5>
                                                        <h4 className="text-black mb-0">{view.name}</h4>
                                                    </div>
                                                    <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                                        <button
                                                            className="btn btn-link px-2"
                                                            onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                                                        >
                                                            <i className="fas fa-minus" />
                                                        </button>
                                                        <input
                                                            id="form1" min={0} name="quantity" defaultValue={1} type="number" className="form-control form-control-sm"
                                                        />
                                                        <button
                                                            className="btn btn-link px-2"
                                                            onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                                                        >
                                                            <i className="fas fa-plus" />
                                                        </button>
                                                    </div>
                                                    <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                                    <h5>price</h5>
                                                        <h6 className="mb-0">{view.price}</h6>
                                                    </div>
                                                    <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                                        <a href="#!" className="text-muted">
                                                            <i className="fas fa-times" onClick={() => deletehendle()} />
                                                        </a>
                                                    </div>
                                                </div>

                                                
                                                      {/* )
                                                    })
                                                }
                                                
                                                   */}
                                              
                                            
                                                <hr className="my-4" />
                                                <div className="pt-5">
                                                    <h6 className="mb-0">
                                                        <a href="#!" className="text-body">
                                                            <i class="fa-solid fa-backward"></i>
                                                            <Link to={'/Home '} className='mt-3 btn btn-danger' style={{ border: '3px solid', borderColor: 'black', padding: '6px 25px', margin: '9px 2px 30px 11px' }} >BACK TO SHOPPING</Link>
                                                        </a>
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 bg-grey">
                                            <div className="p-5">
                                                <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                                                <hr className="my-4" />
                                                <div className="d-flex justify-content-between mb-4">
                                                    <h5 className="text-uppercase">items 3</h5>
                                                    <h5>€ 132.00</h5>
                                                </div>
                                                <h5 className="text-uppercase mb-3">Shipping</h5>
                                                <div className="mb-4 pb-2">
                                                    <select className="select">
                                                        <option value={1}>Standard-Delivery- €5.00</option>
                                                        <option value={2}>Two</option>
                                                        <option value={3}>Three</option>
                                                        <option value={4}>Four</option>
                                                    </select>
                                                </div>
                                                <h5 className="text-uppercase mb-3">Give code</h5>
                                                <div className="mb-5">
                                                    <div className="form-outline">
                                                        <input
                                                            type="text"
                                                            id="form3Examplea2"
                                                            className="form-control form-control-lg"
                                                        />
                                                        <label className="form-label" htmlFor="form3Examplea2">
                                                            Enter your code
                                                        </label>
                                                    </div>
                                                </div>
                                                <hr className="my-4" />
                                                <div className="d-flex justify-content-between mb-5">
                                                    <h5 className="text-uppercase">Total price</h5>
                                                    <h5>€ 137.00</h5>
                                                </div>
                                                <button
                                                    type="button"
                                                    className="btn btn-dark btn-block btn-lg"
                                                    data-mdb-ripple-color="dark"
                                                >
                                                    Register
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </>
    )
}

export default Cart;